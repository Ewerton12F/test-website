from django.shortcuts import render
from rest_framework import generics
from .models import Services
from .serializers import ServicesSerializer

class SevicesListView(generics.ListAPIView):
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer