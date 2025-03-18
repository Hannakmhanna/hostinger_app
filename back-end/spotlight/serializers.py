from rest_framework import serializers
from .models import Spotlight

class SpotlightSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()
    overlay_image = serializers.SerializerMethodField()

    def get_image(self, obj):
        request = self.context.get("request")
        if obj.image:
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return None

    def get_overlay_image(self, obj):
        request = self.context.get("request")
        if obj.overlay_image:
            return request.build_absolute_uri(obj.overlay_image.url) if request else obj.overlay_image.url
        return None

    class Meta:
        model = Spotlight
        fields = "__all__"