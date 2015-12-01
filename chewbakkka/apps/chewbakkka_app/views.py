from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.decorators.http import require_http_methods
from django.core.files.storage import default_storage
from django.http import HttpResponse
from HTMLParser import HTMLParser
import random, os, zipfile, shutil, glob

# Create your views here.

class IndexView(TemplateView):
    template_name = "index.html"

    def get_random_hello(self):
		hello_list = ['Hello, bro', 'YO, DUDE!', 'HOW ARE YOU?', 'WAZZAAAP', 'ASAP ASAP', 'RRWWWGG', 'GGWWWRGHH']

		hello_rnd = random.choice(hello_list)
		return hello_rnd
    
    def post(self, *args, **kwargs):

        banner_link = self.request.POST.get('banner_link', None)
        banner_file = self.request.FILES.get('banner_file', None)
        banner_type = self.request.POST.get('banner_type', None)
        
        save_zip(banner_file)
        extract_zip()
        self.admixer_default_parse()






        form_status_class = ''
        form_status = ''
        form_status_msg = ''

        return render(self.request, 'index.html', {'form_status_class' : form_status_class, 'form_status' : form_status, 'form_status_msg' : form_status_msg ,'chew_say' : self.get_random_hello()})


    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['chew_say'] = self.get_random_hello()
        return context

    def admixer_default_parse(self):
        html_page_name = search_html() #search html-page
        file = open('body.js', 'w+') #create body.js (admixer)
        shutil.move(html_page_name, 'body.html') #rename html-page to body.html
        





# --------------- save and extract zip-file ----------------- #

path_tmpfile_dir =  os.path.abspath(os.path.dirname(__file__))
path_tmpfile_zip = os.path.join(path_tmpfile_dir, '_tmp', 'banner.zip')
path_extract_dir =  os.path.join(path_tmpfile_dir, '_tmp', 'extracted')

def save_zip(banner_file, *args):
    with open(path_tmpfile_zip, 'w') as destination:
        for chunk in banner_file.chunks():
            destination.write(chunk)

def extract_zip(*args):
    shutil.rmtree(path_extract_dir)
    fh = open(path_tmpfile_zip, 'rb')
    z = zipfile.ZipFile(fh)
    z.extractall(path_extract_dir)
    fh.close()

def search_html(*args):
    os.chdir(path_extract_dir)
    for html_page in glob.glob("*.html"):
        return html_page

def templating_admixer_default(*args):    
    html_file = open('body.html')
    parser = MyHTMLParser()
    print parser.feed(html_file);

    
