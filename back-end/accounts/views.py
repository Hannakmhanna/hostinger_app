import json
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

CustomUser = get_user_model()

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {"refresh": str(refresh), "access": str(refresh.access_token)}

@method_decorator(csrf_exempt, name="dispatch")
class EmailLoginView(APIView):
    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            email = data.get("email")
            password = data.get("password")

            if not email or not password:
                return JsonResponse({"message": "Email and password required"}, status=400)

            user = authenticate(request, email=email, password=password)

            if user is None:
                return JsonResponse({"message": "Invalid credentials"}, status=401)

            if not user.is_active:
                return JsonResponse({"message": "User account is inactive"}, status=403)

            tokens = get_tokens_for_user(user)

            return JsonResponse({
                "user": {"id": user.id, "email": user.email, "username": user.username},
                "token": tokens["access"],
                "refresh_token": tokens["refresh"]
            })
        except json.JSONDecodeError:
            return JsonResponse({"message": "Invalid JSON format"}, status=400)
        except Exception as e:
            return JsonResponse({"message": f"Internal server error: {str(e)}"}, status=500)
        
#  Google Login API (CSRF Exempt)
@method_decorator(csrf_exempt, name="dispatch")
class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter