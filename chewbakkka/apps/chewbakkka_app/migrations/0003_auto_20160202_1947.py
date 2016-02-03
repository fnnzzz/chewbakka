# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chewbakkka_app', '0002_auto_20160202_1933'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banners',
            name='zipfile',
            field=models.CharField(max_length=255),
        ),
    ]
