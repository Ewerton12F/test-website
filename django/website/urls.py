from django.urls import path

from . import views

app_name = 'website'

urlpatterns=[
    path("api/", views.SevicesListView.as_view(), name="website_home"),
]