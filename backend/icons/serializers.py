from dataclasses import field
from rest_framework import serializers

from icons.models import Icon


class IconSerializer(serializers.ModelSerializer):
    class Meta:
        model = Icon
        fields = "__all__"
