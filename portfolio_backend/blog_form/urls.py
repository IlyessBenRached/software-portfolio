from django.urls import path
from .views import form_submition

urlpatterns = [
    path('contact_form', form_submition, name='contact_form'),
]
