from django.contrib import admin
from django.urls import path
from shp.views import index
from note.views import note

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", index, name="index"),
    path("note/", note, name="note"),
]
