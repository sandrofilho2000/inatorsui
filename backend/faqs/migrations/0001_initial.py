# Generated by Django 5.0.7 on 2024-08-02 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Faq',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=100, verbose_name='Título')),
                ('subtitle', models.CharField(default='', max_length=100, verbose_name='Subtítulo')),
            ],
            options={
                'verbose_name': 'Sessão de perguntas e respostas',
                'verbose_name_plural': 'Sessões de perguntas e respostas',
            },
        ),
    ]
