from django.urls import path, include
from rest_framework import routers
from blog_form import views
from blog_form.views import FormSubmitViewset
router = routers.DefaultRouter()

router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('submitform/', FormSubmitViewset.as_view(), name='submitform'),
]
urlpatterns += router.urls
