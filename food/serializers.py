from rest_framework import serializers
from .models import Food, Category

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'name', 'option_1', 'option_2', 'option_3', 'category', 'created_at')
        read_only_fields = ('created_at', )

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'color')