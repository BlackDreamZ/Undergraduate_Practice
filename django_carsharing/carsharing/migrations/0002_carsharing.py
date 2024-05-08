from django.db import migrations

def create_data(apps, schema_editor):
    Car = apps.get_model('carsharing', 'Car')
    Car(name="Silver", email="joe@email.com", document="22342342", phone="00000000", photo='media/photo/nophoto.png').save()
    Car(name="John Mith", email="john@email.com", document="11111111", phone="11111111", photo='media/photo/nophoto.png').save()
    Car(name="Aleth", email="alex@email.com", document="22222222", phone="22222222", photo='media/photo/nophoto.png').save()
    Car(name="Kight", email="kira@email.com", document="33333333", phone="33333333", photo='media/photo/nophoto.png').save()
    Car(name="Amanex", email="amanda@email.com", document="44444444", phone="44444444", photo='media/photo/nophoto.png').save()
    Car(name="Onisha", email="oni@email.com", document="44444444", phone="44444444", photo='media/photo/nophoto.png').save()

class Migration(migrations.Migration):

    dependencies = [
        ('carsharing', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]