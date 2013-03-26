from django.conf.urls import patterns, url

from recommend_food import views


urlpatterns = patterns('',
	url(r'^$', views.index, name='index'),
	url(r'^search/$', views.search, name='search'),
	url(r'^advancedSearch/$', views.loadAdvancedSearch, name='advancedSearch'),
)