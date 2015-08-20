from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns(" ",
    # Examples:
    # url(r'^$', 'dev_input.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^forms/', include('forms.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
