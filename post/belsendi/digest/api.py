from digest.models import Digest
from rest_framework import viewsets, permissions
from .serializers import DigestSerializer


class DigestViewSet(viewsets.ModelViewSet):
    queryset = Digest.objects.all()
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = DigestSerializer