from rest_framework import serializers
from .models import Language

class LanguageSerializer(serializers.ModelSerializer):
    flag_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Language
        fields = ["id", "country_name", "flag_image_url", "language_name"]  # Use flag_image_url instead of flag_emoji

    def get_flag_image_url(self, obj):
        request = self.context.get('request')
        if obj.flag_image:
            return request.build_absolute_uri(obj.flag_image.url)
        return None
    


