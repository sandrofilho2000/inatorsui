import os
from pathlib import Path
import dj_database_url
from dotenv import load_dotenv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv()

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv("SECRET_KEY")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = os.getenv("DEBUG", "True") == "True"

ALLOWED_HOSTS = os.getenv("ALLOWED_HOSTS", "").split(",")


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "site_versions",
    "colorfield",
    "heros",
    "rest_framework_api_key",
    "rest_framework",
    "stats",
    "icons",
    "features",
    "banners",
    "faqs",
]

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
}

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

CORS_ORIGIN_ALLOW_ALL = True


ROOT_URLCONF = "api.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [BASE_DIR / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "api.wsgi.app"


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    "default": dj_database_url.config(
        default=os.environ.get("DATABASE_URL"), conn_max_age=600, ssl_require=True
    )
}


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATIC_URL = "static/"
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

from google.oauth2 import service_account


DEFAULT_FILE_STORAGE = os.environ.get("DEFAULT_FILE_STORAGE")
GS_BUCKET_NAME = os.environ.get("GS_BUCKET_NAME")


GS_CREDENTIALS = {
    "type": os.environ.get("GS_CREDENTIALS_TYPE"),
    "project_id": os.environ.get("GS_PROJECT_ID"),
    "private_key_id": os.environ.get("GS_CREDENTIALS_PRIVATE_KEY_ID"),
    "private_key": os.environ.get("GS_CREDENTIALS_PRIVATE_KEY").replace("\\n", "\n"),
    "client_email": os.environ.get("GS_CREDENTIALS_CLIENT_EMAIL"),
    "client_id": os.environ.get("GS_CREDENTIALS_CLIENT_ID"),
    "auth_uri": os.environ.get("GS_CREDENTIALS_AUTH_URI"),
    "token_uri": os.environ.get("GS_CREDENTIALS_TOKEN_URI"),
    "auth_provider_x509_cert_url": os.environ.get(
        "GS_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL"
    ),
    "client_x509_cert_url": os.environ.get("GS_CREDENTIALS_CLIENT_X509_CERT_URL"),
}

# Convert credentials to service account credentials object
GS_CREDENTIALS_OBJECT = service_account.Credentials.from_service_account_info(
    GS_CREDENTIALS
)

GS_CREDENTIALS = GS_CREDENTIALS_OBJECT


DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
CORS_ALLOWED_ORIGINS = [
    "https://ldm-omega.vercel.app",
]
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOWS_CREDENTIALS = True

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
MEDIA_ROOT = "media/"
UPLOAD_ROOT = "media/uploads/"
MEDIA_URL = f"{os.environ.get('MEDIA_URL')}/{GS_BUCKET_NAME}/"
