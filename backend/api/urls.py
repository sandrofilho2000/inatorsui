from django.contrib import admin
from django.urls import path
from site_versions.views import SiteVersionDetailView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/site_versions/", SiteVersionDetailView.as_view(), name="site_versions"),
    path(
        "api/site_versions/<int:pk>",
        SiteVersionDetailView.as_view(),
        name="site_versions_lid",
    ),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
