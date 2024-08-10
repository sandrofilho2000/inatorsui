from tabnanny import verbose
from django.db import models


class Faq(models.Model):
    title = models.CharField(
        verbose_name="Título", max_length=255, default="", null=False
    )
    subtitle = models.CharField(
        verbose_name="Subtítulo", max_length=255, default="", null=False
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Sessão de perguntas e respostas"
        verbose_name_plural = "Sessões de perguntas e respostas"


class FaqItem(models.Model):
    question = models.CharField(max_length=255, verbose_name="Pergunta", null=False)
    answer = models.CharField(max_length=255, verbose_name="Resposta", null=False)
    faq_section = models.ForeignKey(
        "faqs.Faq", related_name="faq_items", null=True, on_delete=models.SET_NULL
    )

    def __str__(self):
        return self.question

    class Meta:
        verbose_name = "Pergunta"
