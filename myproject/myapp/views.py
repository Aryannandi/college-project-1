from django.shortcuts import render
from django.http import HttpResponse

def login(request):
    return render(request, 'login.html',{})

def signup(request):
    return render(request, 'signup.html',{})

def home(request):
    return render(request, 'main.html',{})

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def your_view(request):
    return HttpResponse("It works!")
