from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from .serializers import ServicesSerializer
from website.models import Services

class SevicesListView(ListAPIView):
    permission_classes = (AllowAny,)
    queryset = Services.objects.all()
    serializer_class = ServicesSerializer