from django.db import models


class House(models.Model):

    METHOD_CHOICES = (
        ('S', 'property sold'),
        ('SP', ' property sold prior'),
        ('PI ',' property passed in'),
        ('PN ','sold prior not disclosed'),
        ('NB ','no bid'),
    )

    HOUSE_CHOICES = (
        ('br', 'bedroom(s)'),
        ('h', 'house,cottage,villa, semi,terrace'),
        ('u','unit, duplex'),
        ('t','townhouse'),
    )
  

  
    suburb = models.CharField(max_length=250, blank=True)
    address = models.CharField(max_length=250, blank=True)
    house_type = models.CharField(max_length=150, choices=HOUSE_CHOICES)
    method = models.CharField(max_length=150, choices=METHOD_CHOICES)
    date = models.DateField(blank=True)
    price = models.FloatField(blank=True)
    rooms = models.IntegerField(blank=True, default=0)

    

    def __str__(self):
        return self.suburb
    
