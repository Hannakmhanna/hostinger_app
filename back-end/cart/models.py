from django.db import models

class CartItem(models.Model):
    domain = models.CharField(max_length=255, unique=True)
    plan = models.CharField(max_length=50) 
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.domain

class Order(models.Model):
    domain = models.CharField(max_length=255)
    plan = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  #  Added default
    cutoff_price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)  #Already has default
    total = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

