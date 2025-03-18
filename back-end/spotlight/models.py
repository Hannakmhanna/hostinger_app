from django.db import models

class Spotlight(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    price = models.CharField(max_length=50)
    extra_info = models.TextField()
    image = models.ImageField(upload_to='spotlight/', null=True, blank=True)
    overlay_image = models.ImageField(upload_to='spotlight/', null=True, blank=True)

    deadline = models.DateTimeField()  # Countdown end time

    def __str__(self):
        return self.title
