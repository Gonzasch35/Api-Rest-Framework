from rest_framework import serializers
from .models import Food, Category, Option


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'color')

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('id', 'name', 'image')

class FoodSerializer(serializers.ModelSerializer):
    option_1 = serializers.PrimaryKeyRelatedField(queryset=Option.objects.all())
    option_2 = serializers.PrimaryKeyRelatedField(queryset=Option.objects.all())
    option_3 = serializers.PrimaryKeyRelatedField(queryset=Option.objects.all())
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = Food
        fields = ('id', 'name', 'image', 'option_1', 'option_2', 'option_3', 'category', 'created_at')
        read_only_fields = ('created_at', )