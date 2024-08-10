from django.db import models


class Hero(models.Model):
    title = models.CharField(
        max_length=255,
        null=False,
        verbose_name="Título",
        default="Kickstart your Next.JS 14 website in minutes",
    )

    highlight_term = models.CharField(
        max_length=100, verbose_name="Termo destacado to título"
    )

    img = models.ImageField(upload_to="", null=False, default="hero_img.jpg")

    text = models.TextField(
        verbose_name="text",
        null=False,
        default="Inators UI is a collection of UI components and templates based on Tailwind and Shadcn/ui, just copy and use",
    )

    node_command = models.CharField(
        max_length=100,
        null=False,
        verbose_name="Comando Node.JS",
        default="npx shadcn-ui@latest init",
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Sessão Hero"
        verbose_name_plural = "Sessões Hero"
