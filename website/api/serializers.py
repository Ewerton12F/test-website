from rest_framework import serializers

from website.models import Services

class ServicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ['id', 'title', 'smalldesc', 'largedesc', 'icon']