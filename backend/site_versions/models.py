from django.db import models
from colorfield.fields import ColorField

from features.models import Feature
from stats.models import Stat


class SiteVersion(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nome")
    main_color = ColorField(null=False, default="#e11d48", verbose_name="Cor principal")
    active = models.BooleanField(default=False, verbose_name="Versão principal?")
    hero = models.ForeignKey(
        "heros.Hero", verbose_name="Sessão Hero", on_delete=models.SET_NULL, null=True
    )
    stats = models.ManyToManyField(Stat, verbose_name="Estatísticas")
    features = models.ManyToManyField(Feature, verbose_name="Funcionalidades")
    banner = models.ForeignKey(
        "banners.Banner", verbose_name="Banner", on_delete=models.SET_NULL, null=True
    )
    faq = models.ForeignKey(
        "faqs.Faq",
        verbose_name="Sessão de perguntas e respostas",
        on_delete=models.SET_NULL,
        null=True,
    )

    class Meta:
        verbose_name = "Versão do site"
        verbose_name_plural = "Versões do site"

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if self.active:
            SiteVersion.objects.exclude(pk=self.pk).filter(active=True).update(
                active=False
            )

        super().save(*args, **kwargs)
