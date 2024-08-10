from rest_framework import serializers

from site_versions.models import SiteVersion


class SiteVersionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteVersion
        fields = "__all__"
