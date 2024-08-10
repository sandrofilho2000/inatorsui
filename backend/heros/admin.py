from django.contrib import admin

from heros.models import Hero


@admin.register(Hero)
class HeroAdmin(admin.ModelAdmin):
    list_display = ["title"]
