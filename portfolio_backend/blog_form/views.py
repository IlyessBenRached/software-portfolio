from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets, status
from .serializers import UserSerializer, GroupSerializer, FormDataSerializer
from rest_framework.views import APIView
from rest_framework.response import Response



# Create your views here.


def form_submition(request):
    if request.method == 'POST':
        # Get the data from the POST request
        name = request.POST.get['name']
        email = request.POST.get['email']
        Subject = request.POST.get['Subject']
        file = request.FILES.get["exampleFormControlFile1"]
        project_detail = request.POST.get['projectType']
        data = {
            "Name": name,
            "Email": email,
            "Message": Subject,
            "ProjectDetail": project_detail,
            "Attachment": file.name if file else None
        }
        print(data)
        return JsonResponse({'message': "Data received successfully"})
    else:
        return JsonResponse({"error": "Invalid request method"})


class UserViewSet(viewsets.ModelViewSet):
   """
    API endpoint that allows users to be viewed or edited.

    """
   queryset = User.objects.all().order_by('-date_joined')
   serializer_class = UserSerializer
   permission_classes = (permissions.IsAuthenticated)


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (permissions.IsAuthenticated)


class FormSubmitViewset(APIView):
    def post(self, request):
        Serializer = FormDataSerializer(data=request.data)
        if Serializer.is_valid():
            # Save the validated data in database
            Serializer.save()
            return Response(Serializer.data, status=status.HTTP_201_CREATED)
        return Response(Serializer.errors, status=status.HTTP_400_BAD_REQUEST)
