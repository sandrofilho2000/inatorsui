# Generated by Django 5.0.7 on 2024-07-21 02:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heros', '0004_hero_text'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='node_command',
            field=models.CharField(default='npx shadcn-ui@latest init', max_length=100, verbose_name='Comando Node.JS'),
        ),
    ]
