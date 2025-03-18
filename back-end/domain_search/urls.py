from django.urls import path
from .views import check_domain_availability

urlpatterns = [
    path("check/", check_domain_availability, name="check_domain"),
]
