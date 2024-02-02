from django.db import models

# Create your models here.


class FormData(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField(max_length=30)
    subject = models.CharField(max_length=30)
    projectdetail = models.CharField(max_length=100, default='None')
    created_at = models.DateTimeField(auto_now_add=True)
