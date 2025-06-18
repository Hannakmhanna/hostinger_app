# back-end/api/v1/urls.py
from django.urls import path, include

urlpatterns = [
    path('languages/', include('languages.urls')),
]
