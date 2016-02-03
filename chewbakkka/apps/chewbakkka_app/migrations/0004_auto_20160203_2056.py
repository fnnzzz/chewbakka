# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chewbakkka_app', '0003_auto_20160202_1947'),
    ]

    operations = [
        migrations.CreateModel(
            name='ChewbakkkaSay',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('hello_name', models.CharField(max_length=255, verbose_name=b'Chewbakkka say')),
            ],
            options={
                'verbose_name': 'Chewbakkka Hello',
                'verbose_name_plural': 'Chewbakkka Hello',
            },
        ),
        migrations.AlterModelOptions(
            name='banners',
            options={'verbose_name': 'Banner', 'verbose_name_plural': 'Banners'},
        ),
        migrations.AlterField(
            model_name='banners',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name=b'Date created'),
        ),
        migrations.AlterField(
            model_name='banners',
            name='name',
            field=models.CharField(max_length=255, verbose_name=b'Name'),
        ),
        migrations.AlterField(
            model_name='banners',
            name='zipfile',
            field=models.CharField(max_length=255, verbose_name=b"ZipFile's name"),
        ),
    ]
