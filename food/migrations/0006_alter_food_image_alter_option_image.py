# Generated by Django 5.0.4 on 2024-04-22 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0005_option_food_image_alter_food_option_1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='image',
            field=models.FileField(upload_to='bodegón_files'),
        ),
        migrations.AlterField(
            model_name='option',
            name='image',
            field=models.FileField(upload_to='bodegón_files'),
        ),
    ]