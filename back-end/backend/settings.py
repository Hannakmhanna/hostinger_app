from pathlib import Path
import os
from datetime import timedelta
from dotenv import load_dotenv



# Load environment variables from .env file
load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv("DJANGO_SECRET_KEY", "django-insecure-13&s11yt#2pc7%dx#yld(q$fgw9$o11^zb71#6x&#%$!wn=g$w")

DEBUG = True

ALLOWED_HOSTS = ["*"]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.sites',  # Required for allauth
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    'rest_framework',
    'corsheaders',
    'rest_framework.authtoken',
    
    # Add allauth apps
    "dj_rest_auth",
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
    'allauth.socialaccount.providers.facebook',

    # custom apps
    'languages',
    'pricing',
    'accounts',
    'domain_search',
    'spotlight',
     'cart',
]

AUTHENTICATION_BACKENDS = (
    'allauth.account.auth_backends.AuthenticationBackend',
    'django.contrib.auth.backends.ModelBackend',
)

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware', 
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://192.168.1.9:3000",
    "http://yourfrontenddomain.com",  
]
CORS_ALLOW_CREDENTIALS = True  # Allow authentication cookies

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
}

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',  #  REQUIRED for allauth
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(days=1),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=7),
}

# Secure Google & Facebook OAuth Settings (Fixed the "app" issue)
SOCIALACCOUNT_PROVIDERS = {
    "google": {
        "client_id": os.getenv("2248129170-5nmdf4129dh82ak37iqpk7v0a1jnik74.apps.googleusercontent.com"),
        "secret": os.getenv("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"),
        "SCOPE": ["profile", "email"],
        "AUTH_PARAMS": {"access_type": "offline"},
    }
}


ACCOUNT_AUTHENTICATION_METHOD = "email"  # Accepts "email", "username", or "email_or_username"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_SIGNUP_PASSWORD_ENTER_TWICE = False
ACCOUNT_SESSION_REMEMBER = True
ACCOUNT_UNIQUE_EMAIL = True
SITE_ID = 1  # Ensure this exists in the `django_site` table
NEXTJS_URL = "http://localhost:3000"

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv("DB_NAME", "hostinger_app"),
        'USER': os.getenv("DB_USER", "hostinger_user"),
        'PASSWORD': os.getenv("DB_PASSWORD", "Henna12345"),
        'HOST': 'localhost',  
        'PORT': '5432',  
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = 'static/'
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

#  CSRF Exemption & OAuth Fixes
CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",  #  Allow frontend domain
]
ACCOUNT_DEFAULT_HTTP_PROTOCOL = "http"  #  Ensure correct redirects

REST_USE_JWT = True  #  Ensure JWT is used for authentication