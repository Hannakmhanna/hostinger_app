from django.urls import path
from .views import spotlight_data
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', spotlight_data, name='spotlight_data'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)