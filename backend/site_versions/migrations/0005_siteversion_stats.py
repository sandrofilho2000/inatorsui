# Generated by Django 5.0.7 on 2024-07-30 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('site_versions', '0004_siteversion_hero'),
        ('stats', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='siteversion',
            name='stats',
            field=models.ManyToManyField(to='stats.stat', verbose_name='Estatísticas'),
        ),
    ]
