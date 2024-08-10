from django.db import models


class Stat(models.Model):
    title = models.CharField(
        verbose_name="Título", max_length=100, default="", null=False
    )
    subtitle = models.CharField(
        verbose_name="Subtítulo", max_length=100, default="", null=False
    )

    icon = models.ForeignKey(
        "icons.Icon", verbose_name="Ícone", null=True, on_delete=models.SET_NULL
    )

    def __str__(self):
        return self.title + " " + self.subtitle

    class Meta:
        verbose_name = "Estatística"
