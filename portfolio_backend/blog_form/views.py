from django.shortcuts import render

# Create your views here.


def form_submition(request):
    if request.method == 'POST':
        # Get the data from the POST request
        name = request.POST.get['name']
        email = request.POST.get['email']
        Subject = request.POST.get['Subject']
        file = request.FILES.get["exampleFormControlFile1"]
        data = {
            "Name": name,
            "Email": email,
            "Message": Subject,
            "Attachment": file
        }
    print(data)
