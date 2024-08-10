from rest_framework import serializers

from faqs.models import Faq, FaqItem


class FaqItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = FaqItem
        fields = "__all__"


class FaqSerializer(serializers.ModelSerializer):
    faq_items = FaqItemSerializer(many=True)

    class Meta:
        model = Faq
        fields = "__all__"
