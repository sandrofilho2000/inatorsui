from django.contrib import admin

from features.models import Feature


@admin.register(Feature)
class FeatureAdmin(admin.ModelAdmin):
    list_display = ["title", "subtitle"]
