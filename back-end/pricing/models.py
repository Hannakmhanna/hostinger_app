from django.db import models

class PricingPlan(models.Model):
    PLAN_CHOICES = [
        ('Single', 'Single'),
        ('Premium', 'Premium'),
        ('Business', 'Business'),
        ('Cloud Startup', 'Cloud Startup'),
    ]
    
    name = models.CharField(max_length=50, choices=PLAN_CHOICES, unique=True)
    description = models.TextField(blank=True, null=True)
    renewal_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_percentage = models.IntegerField()
    discounted_price = models.DecimalField(max_digits=10, decimal_places=2)
    storage = models.CharField(max_length=50)
    features = models.JSONField(default=list)
    
    has_free_months = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        """Automatically set 'has_free_months' for specific plans."""
        if self.name in ["Premium", "Business", "Cloud Startup"]:
            self.has_free_months = True
        else:
            self.has_free_months = False
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class ExtraFeature(models.Model):  # Corrected indentation
    title = models.CharField(max_length=255)  # Add title field
    description = models.TextField(blank=True, null=True)  # Add description field
    pricing_plan = models.ForeignKey(PricingPlan, on_delete=models.CASCADE, related_name='extra_features')

    def __str__(self):
        return self.title
