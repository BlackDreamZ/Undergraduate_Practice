from django.contrib import admin
from django.urls import path, re_path
from carsharing import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/carsharing/$', views.carsharing_list),
    re_path(r'^api/carsharing/(\d+)$', views.carsharing_detail),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)