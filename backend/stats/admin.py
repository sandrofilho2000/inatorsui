from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from stats.models import Stat


@admin.register(Stat)
class StatAdmin(admin.ModelAdmin):
    list_display = ["title", "subtitle", "icon_preview"]

    def icon_preview(self, obj):
        return format_html(
            """
                           <div style="display: flex; align-items:center; gap: 4px; font-size: 24px">{}</div>
                           """,
            mark_safe(obj.icon.code),
        )

    icon_preview.short_description = "ícone"
