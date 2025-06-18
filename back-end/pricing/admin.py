from django.contrib import admin
from .models import PricingPlan, ExtraFeature  #  Import your models

# Register PricingPlan model
@admin.register(PricingPlan)
class PricingPlanAdmin(admin.ModelAdmin):
    list_display = ('name', 'discounted_price', 'renewal_price', 'has_free_months')  # Display key fields
    search_fields = ('name',)  # Add search functionality
    list_filter = ('has_free_months',)  # Add filtering options

# Register ExtraFeature model
@admin.register(ExtraFeature)
class ExtraFeatureAdmin(admin.ModelAdmin):
    list_display = ('id', 'pricing_plan')  # Use actual fields from your model
    search_fields = ('pricing_plan__name',)  # Enable searching by pricing plan name


