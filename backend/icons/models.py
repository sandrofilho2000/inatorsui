from django.db import models


class Icon(models.Model):
    name = models.CharField(max_length=100, default="", verbose_name="Nome", null=False)
    code = models.TextField(null=False, verbose_name="Código SVG")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Ícone"
