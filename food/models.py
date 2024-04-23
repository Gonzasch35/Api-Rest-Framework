from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Option(models.Model):
    name = models.CharField(max_length=200)
    image = models.FileField(upload_to='bodegón_files')

    def __str__(self):
        return self.name


class Food(models.Model):
    name = models.CharField(max_length=200)
    image = models.FileField(upload_to='bodegón_files')
    option_1 = models.ForeignKey(Option, on_delete=models.CASCADE, related_name='option_1_foods')
    option_2 = models.ForeignKey(Option, on_delete=models.CASCADE, related_name='option_2_foods')
    option_3 = models.ForeignKey(Option, on_delete=models.CASCADE, related_name='option_3_foods')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name