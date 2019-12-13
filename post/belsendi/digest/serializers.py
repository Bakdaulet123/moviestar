from rest_framework import serializers
from digest.models import Digest


class DigestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Digest
        fields = '__all__'