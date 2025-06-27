# cart/views.py
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from decimal import Decimal
from rest_framework.response import Response
from rest_framework import status
from .models import CartItem, Order
from .serializers import CartItemSerializer, OrderSerializer



class CartItemListView(ListAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

# Retrieve, update, delete a cart item by ID
class CartItemByIdView(RetrieveUpdateDestroyAPIView):
    queryset = CartItem.objects.all()
    serializer_class = CartItemSerializer

class CheckoutView(APIView):
    def get(self, request):
        return Response({"message": "Please use POST to submit an order."}, status=405)
    def post(self, request):
        data = request.data

        try:
            price = Decimal(str(data.get("price", 0)))
            tax = Decimal("5.46")
            total = price + tax
        except Exception as e:
            return Response({"error": "Invalid price or total"}, status=400)

        # Convert cutoff_price safely
        try:
            cutoff_price = Decimal(str(data.get("cutoff_price", 0)))
        except Exception:
            return Response({"error": "Invalid cutoff price"}, status=400)

        order_data = {
            "domain": data.get("domain"),
            "plan": data.get("plan"),
            "price": price,
            "cutoff_price": cutoff_price,
            "total": total.quantize(Decimal("0.01")),  #  Round to 2 decimal places safely
        }

        print("Order data to save:", order_data)

        order_serializer = OrderSerializer(data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()

            cart_data = {
                "domain": data.get("domain"),
                "plan": data.get("plan"),
                "price": price,
            }

            cart_serializer = CartItemSerializer(data=cart_data)
            if cart_serializer.is_valid():
                cart_serializer.save()

            return Response({'message': 'Order and cart item placed successfully'}, status=201)

        print(" Order validation errors:", order_serializer.errors)
        return Response(order_serializer.errors, status=400)


class CartItemDetail(APIView):
    def get(self, request, id):
        try:
            item = CartItem.objects.get(id=id)
            serializer = CartItemSerializer(item)
            return Response(serializer.data)
        except CartItem.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=404)

    def put(self, request, id):
        try:
            item = CartItem.objects.get(id=id)
        except CartItem.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=404)

        serializer = CartItemSerializer(item, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    def delete(self, request, id):
        try:
            item = CartItem.objects.get(id=id)
            item.delete()
            return Response({'message': 'Deleted'}, status=204)
        except CartItem.DoesNotExist:
            return Response({'error': 'Cart item not found'}, status=404)
