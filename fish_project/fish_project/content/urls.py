from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$',
        views.Home.as_view(),
        name='home'),
    url(r'^tab1_file/$', views.tab1_file),
    url(r'^tab2_file/$', views.tab2_file),
    url(r'^tab3_file/$', views.tab3_file),
    url(r'^tab4_file/$', views.tab4_file),
    url(r'^tab5_file/$', views.tab5_file),
    url(r'^tab6_file/$', views.tab6_file),
    url(r'^tab7_file/$', views.tab7_file),
]
