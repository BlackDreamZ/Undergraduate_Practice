from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):

    class Meta:
        model = Car
        fields = ('pk', 'name', 'email', 'document', 'phone', 'registrationDate','photo')