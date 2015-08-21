# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.DeleteModel(
            name='githubUrlA',
        ),
        migrations.DeleteModel(
            name='githubUrlB',
        ),
    ]
