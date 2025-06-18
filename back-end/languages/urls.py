from django.urls import path
from .views import get_languages
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', get_languages, name='get_languages'),
]


