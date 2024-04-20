from rest_framework import routers
from .api import FoodViewSet, CategoryViewSet

router = routers.DefaultRouter()

router.register('api/food', FoodViewSet, 'food')
router.register('api/category', CategoryViewSet, 'category')

urlpatterns = router.urls