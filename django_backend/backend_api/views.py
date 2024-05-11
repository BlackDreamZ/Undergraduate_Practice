from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Car
from .serializers import CarSerializer
from rest_framework.permissions import AllowAny
from rest_framework import status
from django.middleware.csrf import get_token
from django.http import JsonResponse

class CarView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        cars = Car.objects.all()
        output = [
            {
                "Name": car.name,
                "Vin": car.vin,
                "CarNumber": car.carNumber,
                "Registration_Date": car.registrationDate,
                "Photo": car.photo,
                "Longitude": car.longitude,
                "Latitude": car.latitude,
                "Rented": car.rented
            } for car in cars
        ]
        return Response(output)

    def post(self, request):
        serializer = CarSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def my_view(request):
        response = JsonResponse({'message': 'Hello, world!'})
        response['Access-Control-Allow-Origin'] = '*'  # Разрешить доступ с любого источника
        response['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'  # Разрешить определенные методы
        response['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization'  # Разрешить определенные заголовки
        response['Access-Control-Allow-Credentials'] = 'true'  # Разрешить отправку куки (если необходимо)
        response['X-CSRFToken'] = get_token(request)  # Установить CSRF-токен (если используется CSRF)
        return response

class CarDetailView(APIView):

    permission_classes = [AllowAny]

    def delete(self, request, pk):
        try:
            car = Car.objects.get(pk=pk)
            car.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Car.DoesNotExist:
            return Response({'error': 'Машина с указанным идентификатором не найдена'}, status=status.HTTP_404_NOT_FOUND)