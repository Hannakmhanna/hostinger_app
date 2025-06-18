from rest_framework import serializers
from .models import PricingPlan, ExtraFeature

class ExtraFeatureSerializer(serializers.ModelSerializer):
    description = serializers.SerializerMethodField()

    def get_description(self, obj):
        """Split description into a list using newline as separator."""
        return obj.description.split("\n") if obj.description else []

    class Meta:
        model = ExtraFeature
        fields = ['title', 'description']  # Keep the correct fields

class PricingPlanSerializer(serializers.ModelSerializer):
    extra_features = ExtraFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = PricingPlan
        fields = ['name', 'description', 'discounted_price', 'renewal_price', 'features', 'has_free_months', 'extra_features']
