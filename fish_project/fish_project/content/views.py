from django.shortcuts import render
from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = "content/homepage.html"

def tab1_file(request):
    return render(request, 'content/tab1_file.html')

def tab2_file(request):
    return render(request, 'content/tab2_file.html')

def tab3_file(request):
    return render(request, 'content/tab3_file.html')

def tab4_file(request):
    return render(request, 'content/tab4_file.html')

def tab5_file(request):
    return render(request, 'content/tab5_file.html')

def tab6_file(request):
    return render(request, 'content/tab6_file.html')

def tab7_file(request):
    return render(request, 'content/tab7_file.html')
