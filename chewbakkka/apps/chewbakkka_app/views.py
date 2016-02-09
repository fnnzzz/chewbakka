from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.http import require_http_methods
from django.core.files.storage import default_storage
from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest, StreamingHttpResponse
from django.core.servers.basehttp import FileWrapper
from .models import *
from HTMLParser import HTMLParser
import random, os, zipfile, shutil, glob, time, sys, json, mimetypes
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


class DownloadBanner(TemplateView):

    def get(self, request, **kwargs):
        slug_banner_id = kwargs.get("banner_id", None)
        get_banner_zipfile = Banners.objects.get(id=slug_banner_id)
        banner_path = os.path.join(settings.MEDIA_ROOT, 'generated_banners', get_banner_zipfile.zipfile, '')

        generate_zipfile = banner_path + get_banner_zipfile.name + '.zip'

        the_file = generate_zipfile
        filename = os.path.basename(the_file)
        chunk_size = 8192
        response = StreamingHttpResponse(FileWrapper(open(the_file), chunk_size), content_type=mimetypes.guess_type(the_file)[0])
        response['Content-Length'] = os.path.getsize(the_file)    
        response['Content-Disposition'] = "attachment; filename=%s" % filename
        return response

        

  
class DoBanner(TemplateView):

    banners_save_dir = os.path.join(settings.MEDIA_ROOT, 'saved_zip')
    banners_extract_dir = os.path.join(settings.MEDIA_ROOT, 'extracted_zip')
    banners_templates_dir = os.path.join(settings.MEDIA_ROOT, 'templates')
    banners_generated_dir = os.path.join(settings.MEDIA_ROOT, 'generated_banners')

    def save_zip(self):
        # save zipfile
        for upfile in self.banner_file:
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
                    return (False, 'file ne smog zapisatsa')
                    
            else:
                return (False, 'ty menya obmanul - eto ne zip')

        try:
            added_banner_obj = Banners.objects.get(id=new_banner.id)
            return (True, added_banner_obj)       
        except:
            return (False, 'save zip fail')


    def extract_zip(self):
        # create dir for extract zipfile
        if not os.path.exists(os.path.join(self.banners_extract_dir, self.added_banner.zipfile)):
            os.mkdir(os.path.join(self.banners_extract_dir, self.added_banner.zipfile))
        else:
            return (False, 'mkdir fail')

        # extract banner
        try:
            fh = open(os.path.join(self.banners_save_dir, self.added_banner.zipfile), 'rb')
            z = zipfile.ZipFile(fh)
            z.extractall(os.path.join(self.banners_extract_dir, self.added_banner.zipfile, ''))
            fh.close()
            return (True, 'ok')

        # if extract fail
        except Exception as error:
            return (False, 'extract fail', str(error))


    def search_html(self):
        os.chdir(os.path.join(self.banners_extract_dir, self.added_banner.zipfile, ''))
        glob_counter = 0

        # search html-page
        for html_page in glob.glob("*.html"):
            glob_counter += 1
            found_html = html_page

        # if search ok - save path to us html-page
        try:
            found_html = os.path.join(self.banners_extract_dir, self.added_banner.zipfile, '', found_html)
            return (True, found_html)
        except Exception as error:
            return (False, 'html page not found', str(error))

        # thx for generosity, but we need only one html-page
        if glob_counter > 1:
            return (False, 'ya nashel bolshe 1 html, eto menya confusit. Soryan')



    # def search_close_icon(self):
    #     os.chdir(os.path.join(self.banners_extract_dir, self.added_banner.zipfile, ''))
    #     closeicon_counter = 0

    #     # search html-page
    #     for close_icon in glob.glob(self.banner_close):
    #         closeicon_counter += 1
    #         found_closeicon = html_page

    #     # if search ok - save path to us close-icon
    #     try:
    #         found_closeicon = os.path.join(self.banners_extract_dir, self.added_banner.zipfile, '', found_closeicon)
    #         return (True, found_closeicon)
    #     except Exception as error:
    #         return (False, 'close icon not found', str(error))

    #     # thx for generosity, but we need only one html-page
    #     if closeicon_counter > 1:
    #         return (False, 'ya nashel bolshe 1 close-icon, eto menya confusit. Soryan')


    def parse_html(self):
        try:
            self.soup_origin = BeautifulSoup(open(self.found_html), 'html.parser')
            self.canvas_html = self.soup_origin.canvas
            self.canvas_width = self.soup_origin.canvas['width']
            self.canvas_height = self.soup_origin.canvas['height']
            self.all_scripts = self.soup_origin.find_all('script')
            return (True, 'ok')
        except Exception as error:
            return (False, 'parsing fail (netu canvasa)', str(error))


    def render_banner(self):
        try:
            # admixer default template
            self.template_html_path = os.path.join(self.banners_templates_dir, self.area_slug, self.format_slug, 'body.html')
            self.template_js_path = os.path.join(self.banners_templates_dir, self.area_slug, self.format_slug, 'js', 'body.js')
            
            self.soup_html_template = BeautifulSoup(open(self.template_html_path), 'html.parser')
            self.soup_js_template = BeautifulSoup(open(self.template_js_path), 'html.parser')
            
            template_html = Template(str(self.soup_html_template))
            template_js = Template(str(self.soup_js_template))

            if self.area_slug == 'admixer' and self.format_slug == "default":
                self.template_html_render = template_html.render(js_scripts=self.all_scripts, canvas=self.canvas_html)
                self.template_js_render = template_js.render(width=self.canvas_width, height=self.canvas_height, link=self.banner_link)
            
            if self.area_slug == 'admixer' and self.format_slug == "catfish":
                print self.banner_halign
                print self.banner_valign
                self.template_html_render = template_html.render(js_scripts=self.all_scripts, canvas=self.canvas_html, close='')
                self.template_js_render = template_js.render(width=self.canvas_width, height=self.canvas_height, link=self.banner_link, vertical_position=self.banner_valign, horizontal_position=self.banner_halign)

            return (True, 'ok')
        except Exception as error:
            return (False, 'template render error', str(error))
        

    def copy_files_from_extracted(self):
        # copying from extracted to generated
        try:
            self.banner_dir_src = os.path.join(self.banners_extract_dir, self.added_banner.zipfile, '')
            self.banner_dir_dest = os.path.join(self.banners_generated_dir, self.added_banner.zipfile, '')

            #copying all dir exclude 'body.js' and 'body.html'
            shutil.copytree(self.banner_dir_src, self.banner_dir_dest, ignore=shutil.ignore_patterns('body.js', '*.html', '*.fla', '*.zip'))
            return (True, 'ok')
        except Exception as error:
            return (False, 'generate error', str(error))


    def write_rendered(self):
        # create new body.html and write to him us parsed data
        try:
            self.write_html = open(os.path.join(self.banners_generated_dir, self.added_banner.zipfile, '', 'body.html'), 'w')
            self.write_html.write(self.template_html_render)
            self.write_html.close()

            # check on exist 'js' dir
            if not os.path.exists(os.path.join(self.banners_generated_dir, self.added_banner.zipfile, 'js')):
                os.mkdir(os.path.join(self.banners_generated_dir, self.added_banner.zipfile, 'js'))
            
            # check on exist 'js/body.js'
            if os.path.isfile(os.path.join(self.banners_generated_dir, self.added_banner.zipfile, 'js', 'body.js')):
                # if exist just read him
                self.write_js = open(os.path.join(self.banners_generated_dir, self.added_banner.zipfile, 'js', 'body.js'), 'r+')
            else:
                # else - create him
                self.write_js = open(os.path.join(self.banners_generated_dir, self.added_banner.zipfile, 'js', 'body.js'), 'w')

            
            # create new 'js/body.js' and write to him us parsed data
            self.write_js.write(self.template_js_render)
            self.write_js.close()

            return (True, 'ok')

        except Exception as error:
            return (False, 'error on write rendered body.html / body.js', str(error))


    def delete_extracted_dir(self):
        try:
            shutil.rmtree(self.banner_dir_src)
            return (True, 'ok')
        except Exception as error:
            return (False, 'delete extracted dir - fail', str(error))
     

    def zipping_banner(self):        
        try:
            os.chdir(self.banner_dir_dest)
            created_zip = shutil.make_archive(self.banner_dir_dest + self.added_banner.name, "zip", self.banner_dir_dest)
            return (True, 'ok')
        except Exception as error:
            return (False, 'zipping banner - fail', str(error))
           




    # -------- ENTRY POINT -------------------

    def post(self, *args, **kwargs):

        self.banner_link = self.request.POST.get('banner_link', None)
        self.banner_file = self.request.FILES.getlist('banner_file')
        self.banner_valign = self.request.POST.get('banner_valign', None)
        self.banner_halign = self.request.POST.get('banner_halign', None)
        self.banner_close = self.request.POST.get('banner_close', None)

        self.area_slug = kwargs.get('area', None)
        self.format_slug = kwargs.get('format', None)


        # save zip

        save_zip = self.save_zip()
        if save_zip[0] == False:
            return HttpResponseBadRequest(json.dumps(save_zip[1]), content_type="application/json")
        else:
            self.added_banner = save_zip[1]

        # extract zip

        extract_zip = self.extract_zip()
        if extract_zip[0] != True:
            return HttpResponseBadRequest(json.dumps(extract_zip[1]), content_type="application/json")
        
        # search html-pages in extracted zip

        search_html = self.search_html()
        if search_html[0] == False:
            return HttpResponseBadRequest(json.dumps(search_html[1]), content_type="application/json")
        else:
            self.found_html = search_html[1]


        # search close icon if admixer/catfish
        # if self.area_slug == 'admixer' and self.format_slug == "catfish":
        #     search_close_icon = self.search_close_icon()
        #     if search_close_icon[0] == False:
        #         return HttpResponseBadRequest(json.dumps(search_close_icon[1]), content_type="application/json")
        #     else:
        #         self.found_html = search_close_icon[1]    

        # parsing html-page (search canvas, height of canvas ... )

        parse_html = self.parse_html()
        if parse_html[0] == False:
            return HttpResponseBadRequest(json.dumps(parse_html[1]), content_type="application/json")
        else:
            self.found_html = parse_html[1]

        # include parsed data to us body.html / body.js ... 

        render_banner = self.render_banner()
        if render_banner[0] == False:
            return HttpResponseBadRequest(json.dumps(render_banner[1]), content_type="application/json")
        else:
            self.found_html = render_banner[1]

        # copy all files from extracted banner 

        copy_files_from_extracted = self.copy_files_from_extracted()
        if copy_files_from_extracted[0] == False:
            return HttpResponseBadRequest(json.dumps(copy_files_from_extracted[1]), content_type="application/json")
        else:
            self.found_html = copy_files_from_extracted[1]

        # writing parsed data to body.html / body.js 

        write_rendered = self.write_rendered()
        if write_rendered[0] == False:
            return HttpResponseBadRequest(json.dumps(write_rendered[1]), content_type="application/json")
        else:
            self.found_html = write_rendered[1]

        # remove dir with extracted banner

        delete_extracted_dir = self.delete_extracted_dir()
        if delete_extracted_dir[0] == False:
            return HttpResponseBadRequest(json.dumps(delete_extracted_dir[1]), content_type="application/json")
        else:
            self.found_html = delete_extracted_dir[1]

        # zipping generated banner

        zipping_banner = self.zipping_banner()
        if zipping_banner[0] == False:
            return HttpResponseBadRequest(json.dumps(zipping_banner[1]), content_type="application/json")
        else:
            self.found_html = zipping_banner[1]





        # if ALL OK - show success message
        return HttpResponse(json.dumps(self.added_banner.id), content_type="application/json")













        # # create dir for extract zipfile
        # if not os.path.exists(os.path.join(self.banners_extract_dir, added_banner_id.zipfile)):
        #     os.mkdir(os.path.join(self.banners_extract_dir, added_banner_id.zipfile))
        # else:
        #     response_json['message'] = 'mkdir fail'
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")


        # # extract banner
        # try:
        #     fh = open(os.path.join(self.banners_save_dir, added_banner_id.zipfile), 'rb')
        #     z = zipfile.ZipFile(fh)
        #     z.extractall(os.path.join(self.banners_extract_dir, added_banner_id.zipfile, ''))
        #     fh.close()

        # # if extract fail
        # except Exception as error:
        #     response_json['message'] = 'extract fail'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")


        # # ------------------------------------------



        # os.chdir(os.path.join(self.banners_extract_dir, added_banner_id.zipfile, ''))
        # glob_counter = 0

        # #search close icon
        # # if area_slug == 'admixer' and format_slug == 'catfish':
            
        # #     close_counter = 0

        # #     for close_icon in glob.glob(banner_close):
        # #         close_counter += 1
        # #         found_close_icon = close_icon

        # #     # if search close icon ok - save path to us close icon
        # #     try:
        # #         found_close_icon = os.path.join(self.banners_extract_dir, added_banner_id.zipfile, '', found_close_icon)
        # #     except Exception as error:
        # #         response_json['message'] = 'close icon not found'
        # #         response_json['error'] = str(error)
        # #         return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")      

        # #     if close_counter > 1:
        # #         response_json['message'] = 'ya nashel bolshe 1 close icona, eto menya confusit. Soryan'
        # #         return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")



        # # if search ok - save path to us html-page
        # try:
        #     found_html = os.path.join(self.banners_extract_dir, added_banner_id.zipfile, '', found_html)
        # except Exception as error:
        #     response_json['message'] = 'html page not found'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")


        # # thx for generosity, but we need only one html-page
        # if glob_counter > 1:
        #     response_json['message'] = 'ya nashel bolshe 1 html, eto menya confusit. Soryan'
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")












        # # let's parse html-page
        # try:
        #     soup_origin = BeautifulSoup(open(found_html), 'html.parser')
        #     canvas_html = soup_origin.canvas
        #     canvas_width = soup_origin.canvas['width']
        #     canvas_height = soup_origin.canvas['height']
        #     all_scripts = soup_origin.find_all('script')
        # except Exception as error:
        #     response_json['message'] = 'parsing fail (netu canvasa)'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")



        # try:
        #     # admixer default template
        #     template_html_path = os.path.join(self.banners_templates_dir, area_slug, format_slug, 'body.html')
        #     template_js_path = os.path.join(self.banners_templates_dir, area_slug, format_slug, 'js', 'body.js')
            
        #     soup_html_template = BeautifulSoup(open(template_html_path), 'html.parser')
        #     soup_js_template = BeautifulSoup(open(template_js_path), 'html.parser')
            
        #     template_html = Template(str(soup_html_template))
        #     template_js = Template(str(soup_js_template))


        #     if area_slug == 'admixer' and format_slug == 'default':
        #         template_html_render = template_html.render(js_scripts=all_scripts, canvas=canvas_html)
        #     if area_slug == 'admixer' and format_slug == 'catfish':
        #         template_html_render = template_html.render(js_scripts=all_scripts, canvas=canvas_html, close_pic=banner_close)

        #     if area_slug == 'admixer' and format_slug == 'default':
        #         template_js_render = template_js.render(width=canvas_width, height=canvas_height, link=banner_link)
        #     if area_slug == 'admixer' and format_slug == 'catfish':
        #         template_js_render = template_js.render(height=canvas_height, verical_position=banner_valign, horizontal_position=banner_halign)



        # except Exception as error:
        #     response_json['message'] = 'template render error'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")



        # # copying from extracted to generated
        # try:
        #     banner_dir_src = os.path.join(self.banners_extract_dir, added_banner_id.zipfile, '')
        #     banner_dir_dest = os.path.join(self.banners_generated_dir, added_banner_id.zipfile, '')

        #     #copying all dir exclude 'body.js' and 'body.html'
        #     shutil.copytree(banner_dir_src, banner_dir_dest, ignore=shutil.ignore_patterns('body.js', '*.html', '*.fla'))
        # except Exception as error:
        #     response_json['message'] = 'generate error '
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")

        # # create new body.html and write to him us parsed data
        # try:
        #     write_html = open(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, '', 'body.html'), 'w')
        #     write_html.write(template_html_render)
        #     write_html.close()

        #     # check on exist 'js' dir
        #     if not os.path.exists(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js')):
        #         os.mkdir(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js'))
            
        #     # check on exist 'js/body.js'
        #     if os.path.isfile(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js', 'body.js')):
        #         # if exist just read him
        #         write_js = open(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js', 'body.js'), 'r+')
        #     else:
        #         # else - create him
        #         write_js = open(os.path.join(self.banners_generated_dir, added_banner_id.zipfile, 'js', 'body.js'), 'w')

            
        #     # create new 'js/body.js' and write to him us parsed data
        #     write_js.write(template_js_render)
        #     write_js.close()

        # except Exception as error:
        #     response_json['message'] = 'error on save new generated body.html'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")



        # try:
        #     shutil.rmtree(banner_dir_src)
        # except Exception as error:
        #     response_json['message'] = 'delete fail'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")

        # try:
        #     os.chdir(banner_dir_dest)
        #     print os.getcwd()
        #     created_zip = shutil.make_archive(banner_dir_dest + added_banner_id.name, "zip", banner_dir_dest)
        # except Exception as error:
        #     response_json['message'] = 'zipping fail'
        #     response_json['error'] = str(error)
        #     return HttpResponseBadRequest(json.dumps(response_json), content_type="application/json")



        # if ALL is ok
        # response_json['banner_id'] = added_banner_id.id
        # return HttpResponse(json.dumps(response_json), content_type="application/json")
