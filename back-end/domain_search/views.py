from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def check_domain_availability(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            domain = data.get("domain")

            if not domain:
                return JsonResponse({"error": "No domain provided"}, status=400)

            # Simulate domain check
            is_available = False  

            # Example AI-generated alternatives
            ai_suggestions = [
                {"domain": f"{domain}", "price": "$7.99", "discount": "50%"},
                {"domain": f"best{domain}.com", "price": "$9.99", "discount": "30%"},
                {"domain": f"{domain}-pro.net", "price": "$5.99", "discount": "40%"},
                 {"domain": f"best{domain}.io", "price": "$9.99", "discount": "30%"},
                {"domain": f"{domain}.tech", "price": "$5.99", "discount": "40%"},
            ]

            return JsonResponse({
                "available": is_available,
                "domain": domain,
                "ai_suggestions": ai_suggestions
            })

        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)

    return JsonResponse({"message": "Use a POST request with a domain name."}, status=405)
