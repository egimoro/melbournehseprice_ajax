# Generated by Django 3.1 on 2020-08-31 21:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houseprice_ajax', '0002_auto_20200830_1903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='house',
            name='house_type',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='house',
            name='method',
            field=models.CharField(max_length=150),
        ),
    ]
