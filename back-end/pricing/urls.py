from django.urls import path
from .views import get_pricing_plans, get_pricing_plan_details

urlpatterns = [
    path('', get_pricing_plans, name='pricing-plans'),  # Matches /api/pricing/
    path('<str:plan_name>/', get_pricing_plan_details, name='pricing-plan-details'),  # Matches /api/pricing/<plan_name>/
]
