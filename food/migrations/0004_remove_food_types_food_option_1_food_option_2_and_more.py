# Generated by Django 5.0.4 on 2024-04-21 00:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('food', '0002_category_food_delete_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='food',
            name='types',
        ),
        migrations.AddField(
            model_name='food',
            name='option_1',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='food',
            name='option_2',
            field=models.CharField(default=None, max_length=100),
        ),
        migrations.AddField(
            model_name='food',
            name='option_3',
            field=models.CharField(default=None, max_length=100),
        ),
    ]
