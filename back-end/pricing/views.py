from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import PricingPlan
from .serializers import PricingPlanSerializer

@api_view(['GET'])
def get_pricing_plans(request):
    plans = PricingPlan.objects.all()
    serializer = PricingPlanSerializer(plans, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_pricing_plan_details(request, plan_name):
    try:
        plan = PricingPlan.objects.get(name=plan_name)
        serializer = PricingPlanSerializer(plan)
        return Response(serializer.data)
    except PricingPlan.DoesNotExist:
        return Response({"error": "Plan not found"}, status=404)
