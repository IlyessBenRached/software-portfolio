from django.contrib.auth.models import Group, User
from rest_framework import serializers
from .models import FormData


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = ['id', 'name', 'email', 'subject',
                  'projectdetail', 'created_at']

    def create(self, validated_data):
        return FormData.objects.create(**validated_data)
