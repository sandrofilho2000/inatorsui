from django.contrib import admin

from faqs.models import Faq, FaqItem


class FaqItemInline(admin.TabularInline):
    model = FaqItem
    extra = 1


@admin.register(Faq)
class FaqAdmin(admin.ModelAdmin):
    list_display = ["title"]
    inlines = [FaqItemInline]
