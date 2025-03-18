from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)  # Ensure unique email
    username = models.CharField(max_length=255, blank=True, null=True)

    # Avoid clashes with built-in related_name in Group & Permission
    groups = models.ManyToManyField(Group, related_name="customuser_groups", blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name="customuser_permissions", blank=True)

    USERNAME_FIELD = "email"  # Use email as primary identifier
    REQUIRED_FIELDS = ["username"]  # Keep username optional

    def __str__(self):
        return self.email
