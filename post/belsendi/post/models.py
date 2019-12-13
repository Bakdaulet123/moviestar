from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=5000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='post_images', blank=True)
    owner = models.ForeignKey(User, related_name="post", on_delete=models.CASCADE, blank=True, null=True)


    @property
    def author_full_name(self):
        try:
            return f'{self.owner.username}'
        except:
            return "Name Not Set"
    
    class Meta:
        ordering = ['-created_at']