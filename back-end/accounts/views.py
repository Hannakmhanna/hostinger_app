from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from django.contrib.auth import get_user_model

CustomUser = get_user_model()

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {"refresh": str(refresh), "access": str(refresh.access_token)}

class EmailLoginView(APIView):
    permission_classes = []  # Allow unauthenticated access
    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return Response({"message": "Email and password required"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(request, email=email, password=password)

        if user is None:
            return Response({"message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        if not user.is_active:
            return Response({"message": "User account is inactive"}, status=status.HTTP_403_FORBIDDEN)

        tokens = get_tokens_for_user(user)

        return Response({
            "user": {"id": user.id, "email": user.email, "username": user.username},
            "token": tokens["access"],
            "refresh_token": tokens["refresh"]
        }, status=status.HTTP_200_OK)

#  Google Login API (CSRF Exempt)
class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    permission_classes = []  # Optional: allow unauthenticated