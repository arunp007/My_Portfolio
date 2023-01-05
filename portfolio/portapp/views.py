from django.shortcuts import render
from django.http import HttpResponse

def portfolio(request):
    return render(request, 'portfolio.html')
