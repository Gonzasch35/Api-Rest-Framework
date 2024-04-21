from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=200)
    option_1 = models.CharField(max_length=100, default=None)
    option_2 = models.CharField(max_length=100, default=None)
    option_3 = models.CharField(max_length=100, default=None)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name