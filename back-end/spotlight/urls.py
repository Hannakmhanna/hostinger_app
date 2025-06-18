from django.urls import path
from .views import spotlight_data

urlpatterns = [
    path('', spotlight_data, name='spotlight_data'),
]
