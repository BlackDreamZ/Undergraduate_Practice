from django.db import models

class Car(models.Model):
    name = models.CharField("Name", max_length=240)
    vin = models.CharField("Vin", max_length=20)
    carNumber = models.CharField("CarNumber", max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    photo = models.CharField("Photo", max_length=512)
    longitude = models.CharField("Longitude", max_length=240)
    latitude = models.CharField("Latitude", max_length=240)
    fuel = models.DecimalField(max_digits=5,decimal_places=2,default=100)
    price = models.DecimalField(max_digits=5,decimal_places=2,default=7)
    rented = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class User(models.Model):
    phone_number = models.CharField(max_length=15)
    password = models.CharField(max_length=128)
    is_registered = models.BooleanField(default=False)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=300)
    admin = models.BooleanField(default=False)

    def __str__(self):
        return self.phone_number