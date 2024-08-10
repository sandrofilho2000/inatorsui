from django.db import models


class Feature(models.Model):
    title = models.CharField(
        max_length=255,
        verbose_name="Título",
        default="""
Make Next.js 14 your new playground""",
    )
    subtitle = models.CharField(
        max_length=255,
        verbose_name="Subtítulo",
        default="""
Easy to use UI elements based on Tailwind CSS and Shadcn/ui""",
    )
    text = models.TextField(
        verbose_name="Texto",
        default="""Inators UI is a toolkit for developers and designers to make creating nextjs client side as well as server side interfaces easier. Using Shadcn-ui components as base and added missing necessary components, Inators UI have multiple components to help you get started. Everything is modular and customizable to fit your project. From cards to buttons to blogs, you can quickly create a variety of layouts that is responsible for next.js 14 and look great on any screen.""",
    )

    img = models.ImageField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Funcionalidade"
