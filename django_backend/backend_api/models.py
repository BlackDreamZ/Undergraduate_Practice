from django.db import models

class Car(models.Model):
    name = models.CharField("Name", max_length=240)
    vin = models.CharField("Vin", max_length=20)
    carNumber = models.CharField("CarNumber", max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    photo = models.CharField("Photo", max_length=512)
    longitude = models.CharField("Longitude", max_length=240)
    latitude = models.CharField("Latitude", max_length=240)
    rented = models.BooleanField(default=False)

    def __str__(self):
        return self.name