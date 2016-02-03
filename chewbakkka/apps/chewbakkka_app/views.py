from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.http import require_http_methods
from django.core.files.storage import default_storage
from django.conf import settings
from django.http import HttpResponse
from .models import *
from HTMLParser import HTMLParser
import random, os, zipfile, shutil, glob, time, sys
from bs4 import BeautifulSoup
from jinja2 import Template

# Create your views here.

class IndexView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
		context = super(IndexView, self).get_context_data(**kwargs)
		hello_list = ChewbakkkaSay.objects.all()
		hello_rnd = random.choice(hello_list)
		context['hello_message'] = hello_rnd
		return context

  
class DoBanner(TemplateView):

    def get_context_data(self, **kwargs):
        context = super(DoBanner, self).get_context_data(**kwargs)
        area_slug = kwargs.get('area', None)
        format_slug = kwargs.get('format', None)
        print area_slug
        print format_slug

    banners_save_dir = os.path.join(settings.MEDIA_ROOT, 'saved_zip')
    banners_extract_dir = os.path.join(settings.MEDIA_ROOT, 'extracted_zip')
    banners_templates_dir = os.path.join(settings.MEDIA_ROOT, 'templates', 'admixer', 'default')
    banners_generated_dir = os.path.join(settings.MEDIA_ROOT, 'generated_banners')


    def post(self, *args, **kwargs):

        banner_link = self.request.POST.get('banner_link', None)
        banner_file = self.request.FILES.get('banner_file', None)
        banner_type = self.request.POST.get('banner_type', None)



        # save zipfile
        for upfile in self.request.FILES.getlist('banner_file'):
            clear_filename = upfile.name

            # check on filetype == .zip
            if clear_filename.endswith('.zip'):
                filename_timestamp = str(int(time.time())) + '_' + upfile.name
                upload_dir = os.path.join(self.banners_save_dir, filename_timestamp)
                fd = open(upload_dir, 'w+') 
                for chunk in upfile.chunks():
                    fd.write(chunk)
                fd.close()

                # create column on db if all right
                if os.path.exists(upload_dir):
                    new_banner = Banners(
                        name = clear_filename,
                        zipfile = filename_timestamp
                    )
                    new_banner.save()
                else:
                    error_message = 'file ne smog zapisatsa'
                    return HttpResponse(error_message)
                    
            else:
                error_message = 'ty menya obmanul - eto ne zip'
                return HttpResponse(error_message)


        added_banner_id = Banners.objects.get(id=new_banner.id)



        # create dir for extract zipfile
        if not os.path.exists(os.path.join(self.banners_extract_dir, added_banner_id.zipfile)):
            os.mkdir(os.path.join(self.banners_extract_dir, added_banner_id.zipfile))
        else:
            error_message = 'mkdir fail'
            return HttpResponse(error_message)


        # extract banner
        try:
            fh = open(os.path.join(self.banners_save_dir, added_banner_id.zipfile), 'rb')
            z = zipfile.ZipFile(fh)
            z.extractall(os.path.join(self.banners_extract_dir, added_banner_id.zipfile, ''))
            fh.close()

        # if extract fail
        except Exception as error:
            error_message = 'extract fail'
            error_message += str(error)
            return HttpResponse(error_message)


        # ------------------------------------------




        os.chdir(os.path.join(self.banners_extract_dir, added_banner_id.zipfile, ''))
        glob_counter = 0

        # search html-page
        for html_page in glob.glob("*.html"):
            glob_counter += 1
            found_html = html_page

        # if search ok - save path to us html-page
        try:
            found_html = os.path.join(self.banners_extract_dir, added_banner_id.zipfile, '', found_html)
        except Exception as error:
            error_message = 'html page not found'
            error_message += str(error)
            return HttpResponse(error_message)


        # thx for generosity, but we need only one html-page
        if glob_counter > 1:
            error_message = 'ya nashel bolshe 1 html, eto menya confusit. Soryan'
            return HttpResponse(error_message)


        # let's parse html-page
        try:
            soup_origin = BeautifulSoup(open(found_html), 'html.parser')
            canvas_html = soup_origin.canvas
            canvas_width = soup_origin.canvas['width']
            canvas_height = soup_origin.canvas['height']
            all_scripts = soup_origin.find_all('script')
        except Exception as error:
            error_message = 'parsing fail (netu canvasa)'
            error_message += str(error)
            return HttpResponse(error_message)



        try:
            # admixer default template
            template_html_path = os.path.join(self.banners_templates_dir, '', 'body.html')
            template_js_path = os.path.join(self.banners_templates_dir, '', 'js', 'body.js')
            
            soup_html_template = BeautifulSoup(open(template_html_path), 'html.parser')
            soup_js_template = BeautifulSoup(open(template_js_path), 'html.parser')
            
            template_html = Template(str(soup_html_template))
            template_js = Template(str(soup_js_template))

            template_html_render = template_html.render(js_scripts=all_scripts, canvas=canvas_html)
            template_js_render = template_js.render(width=canvas_width, height=canvas_height)
        except Exception as error:
            error_message = 'template render error'
            error_message += str(error)
            return HttpResponse(error_message)



        # copying from extracted to generated
        try:
            banner_dir_src = os.path.join(self.banners_extract_dir, added_banner_id.zipfile, '')
            banner_dir_dest = os.path.join(self.banners_generated_dir, added_banner_id.zipfile, '')

            #copying all dir exclude 'body.js' and 'body.html'
            shutil.copytree(banner_dir_src, banner_dir_dest, ignore=shutil.ignore_patterns('body.js', 'body.html'))
        except Exception as error:
            error_message = 'generate error '
            error_message += str(error)
            return HttpResponse(error_message)

        # create new body.html and write to him us parsed data
        try:
            write_html = open(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, '', 'body.html'), 'w')
            write_html.write(template_html_render)
            write_html.close()

            # check on exist 'js' dir
            if not os.path.exists(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js')):
                os.mkdir(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js'))
            
            # check on exist 'js/body.js'
            if os.path.isfile(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js', 'body.js')):
                # if exist just read him
                write_js = open(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js', 'body.js'), 'r+')
            else:
                # else - create him
                write_js = open(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js', 'body.js'), 'w')

            
            # create new 'js/body.js' and write to him us parsed data
            write_js.write(template_js_render)
            write_js.close()

        except Exception as error:
            error_message = 'error on save new generated body.html'
            error_message += str(error)
            return HttpResponse(error_message)



        try:
            shutil.rmtree(banner_dir_src)
        except Exception as error:
            error_message = 'delete fail'
            error_message += str(error)
            return HttpResponse(error_message)




        return HttpResponse('vse ok')
