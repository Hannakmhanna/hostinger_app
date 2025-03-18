from django.db import models

class Language(models.Model):
    country_name = models.CharField(max_length=100)
    language_name = models.CharField(max_length=100)
    flag_image = models.ImageField(upload_to='images/')  # Store images in 'images/' directory

    def __str__(self):
        return self.country_name


