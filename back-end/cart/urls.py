from django.urls import path
from .views import CartItemDetail, CheckoutView, CartItemListView, CartItemByIdView

urlpatterns = [
    path('cart/', CartItemListView.as_view(), name='cart-list'),  # GET all cart items
    path('cart/<int:id>/', CartItemDetail.as_view(), name='cart-item-detail'),  # updated to match 'id'
   path('cart/checkout/', CheckoutView.as_view(), name='checkout'),
]
