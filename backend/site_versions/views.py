from django.shortcuts import get_object_or_404, render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey
from banners.models import Banner
from banners.serializers import BannerSerializer
from faqs.models import Faq
from faqs.serializers import FaqSerializer
from features.models import Feature
from features.serializers import FeatureSerializer
from heros.models import Hero
from heros.serializers import HeroSerializer
from icons.models import Icon
from icons.serializers import IconSerializer
from site_versions.models import SiteVersion
from site_versions.serializers import SiteVersionSerializer
from stats.models import Stat
from stats.serializers import StatSerializer

# Create your views here.


class SiteVersionDetailView(generics.GenericAPIView):
    serializer_class = SiteVersionSerializer
    permission_classes = [HasAPIKey]

    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk")
        if pk:
            site_version_instance = SiteVersion.objects.filter(pk=pk).first()
        else:
            site_version_instance = SiteVersion.objects.filter(active=True).first()

        site_version = SiteVersionSerializer(site_version_instance).data

        if site_version["hero"]:
            hero_instance = get_object_or_404(Hero, pk=site_version["hero"])
            hero = HeroSerializer(hero_instance).data

        else:
            hero = False

        stats = []

        for item in site_version["stats"]:
            stat_instance = get_object_or_404(Stat, pk=item)
            stat = StatSerializer(stat_instance).data
            icon_instance = get_object_or_404(Icon, pk=stat["icon"])
            icon = IconSerializer(icon_instance).data
            stat["icon"] = icon["code"]
            stats.append(stat)

        features = []

        for item in site_version["features"]:
            feature_instance = get_object_or_404(Feature, pk=item)
            feature = FeatureSerializer(feature_instance).data
            features.append(feature)

        if site_version["banner"]:
            banner_instance = get_object_or_404(Banner, pk=site_version["banner"])
            banner = BannerSerializer(banner_instance).data

        else:
            banner = False

        if site_version["faq"]:
            faq_instance = get_object_or_404(Faq, pk=site_version["faq"])
            faq = FaqSerializer(faq_instance).data

        else:
            faq = False

        site_data = {
            "name": site_version["name"],
            "main_color": site_version["main_color"],
            "hero": hero,
            "stats": stats,
            "features": features,
            "banner": banner,
            "faq": faq,
        }
        return Response(site_data)
