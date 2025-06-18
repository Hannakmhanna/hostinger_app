# cart/serializers.py

from rest_framework import serializers
from .models import CartItem, Order

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['domain', 'plan', 'price', 'cutoff_price', 'total']
