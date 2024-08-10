from django.contrib import admin
from icons.models import Icon
from django.utils.html import format_html
from django.utils.safestring import mark_safe


@admin.register(Icon)
class IconAdmin(admin.ModelAdmin):
    list_display = ["name", "icon_preview"]

    def icon_preview(self, obj):
        return format_html(
            """
                           <div style="display: flex; align-items:center; gap: 4px; font-size: 24px">{}</div>
                           """,
            mark_safe(obj.code),
        )

    icon_preview.short_description = "ícone"
