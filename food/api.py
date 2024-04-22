from .models import Food, Category, Option
from rest_framework import viewsets, permissions
from .serializers import FoodSerializer, CategorySerializer, OptionSerializer

class FoodViewSet(viewsets.ModelViewSet):
    queryset = Food.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = FoodSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = CategorySerializer

class OptionViewSet(viewsets.ModelViewSet):
    queryset = Option.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = OptionSerializer
