# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chewbakkka_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banners',
            name='zipfile',
            field=models.FileField(upload_to=b''),
        ),
    ]
