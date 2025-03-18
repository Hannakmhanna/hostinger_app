from django.contrib import admin
from django.urls import path, include
from django.http import JsonResponse
from django.conf import settings
from django.conf.urls.static import static

# Import necessary views for Google login
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter

# Custom Google Login View
class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter

# Function to list available API endpoints
def api_root(request):
    return JsonResponse({
        "languages": "/api/languages/",
        "pricing": "/api/pricing/",
        "accounts": "/api/accounts/",
        "domain_search": "/api/domain_search/",
        "spotlight": "/api/spotlight/", 
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', api_root),  
    path('api/languages/', include('languages.urls')), 
    path('api/pricing/', include('pricing.urls')), 
    path('api/accounts/', include('accounts.urls')), 
    path("api/domain_search/", include("domain_search.urls")),

    # ✅ Standard Authentication
    path("api/auth/", include("dj_rest_auth.urls")),
    path("api/auth/registration/", include("dj_rest_auth.registration.urls")),

    # ✅ Google Social Authentication
    path("api/auth/social/google/", GoogleLoginView.as_view(), name="google_login"),

    # ✅ Use allauth's social authentication URLs
    path('accounts/', include('allauth.urls')),
     path("api/spotlight/", include("spotlight.urls")),  
]

# ✅ Serve static and media files in development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
