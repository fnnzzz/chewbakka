from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
from apps.chewbakkka_app.views import *
from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'canesten.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    # url(r'^test\.html$', TemplateView.as_view(template_name='test.html')),
    url(r'^$', IndexView.as_view(), name='index'),
    url(r'^do-banner/(?P<area>\S+)/(?P<format>\S+)$', DoBanner.as_view(), name='do-banner'),
    url(r'^download-banner/(?P<banner_id>\d+)$', DownloadBanner.as_view(), name='download-banner'),
    url(r'^admin/', include(admin.site.urls)),
    # url(r'admixer/^$', BannerDo.as_view(), name='admixer'),
)