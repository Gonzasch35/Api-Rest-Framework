from rest_framework import routers
from .api import FoodViewSet, CategoryViewSet, OptionViewSet

router = routers.DefaultRouter()

router.register('api/food', FoodViewSet, 'food')
router.register('api/category', CategoryViewSet, 'category')
router.register('api/option', OptionViewSet, 'option')

urlpatterns = router.urls