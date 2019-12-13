from django.db import models


class Digest(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=5000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='digest_images', blank=True)
