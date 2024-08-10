from django.db import models


class Banner(models.Model):
    title = models.CharField(
        verbose_name="Título", max_length=255, default="", null=False
    )
    subtitle = models.CharField(
        verbose_name="Subtítulo", max_length=255, default="", null=False
    )

    cta_text = models.CharField(
        max_length=100, verbose_name="Texto do botão", default="", null=False
    )

    cta_link = models.CharField(
        max_length=100, verbose_name="Link do botão", default="", null=False
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Banner"
