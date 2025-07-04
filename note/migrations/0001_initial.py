# Generated by Django 5.2.3 on 2025-06-21 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('note_heading', models.CharField(blank=True, max_length=200, null=True)),
                ('note', models.CharField(blank=True, max_length=1000, null=True)),
                ('lat', models.FloatField()),
                ('lng', models.FloatField()),
            ],
        ),
    ]
