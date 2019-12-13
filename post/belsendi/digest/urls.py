from rest_framework import routers
from .api import DigestViewSet


router=routers.DefaultRouter()
router.register('api/digest', DigestViewSet, 'digest')

urlpatterns = router.urls