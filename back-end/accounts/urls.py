from django.urls import path, include
from django.http import JsonResponse
from .views import EmailLoginView, GoogleLoginView

# 🔹 API Root
def accounts_root(request):
    return JsonResponse({
        "email_login": "/api/accounts/login/",
        "google_login": "/api/accounts/social/google/"
    })

urlpatterns = [
    path('', accounts_root, name='accounts-root'),
    path("auth/login/", EmailLoginView.as_view(), name="email_login"),
    path("social/google/", GoogleLoginView.as_view(), name="google-login"),  # ✅ Add Google Login
    path("registration/", include("dj_rest_auth.registration.urls")),
]
