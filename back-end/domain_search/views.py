from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Helper to calculate the cutoff price
def calculate_cutoff(price_str, discount_str):
    price = float(price_str.strip("$"))
    discount = float(discount_str.strip("%"))
    cutoff = price / (1 - discount / 100)
    return f"${cutoff:.2f}"

# Helper to extract name and extension from the domain
def split_domain(domain):
    parts = domain.split(".")
    if len(parts) > 1:
        return ".".join(parts[:-1]), parts[-1]  # name, extension
    return domain, ""  # fallback if no extension

@api_view(["POST"])
def check_domain_availability(request):
    domain_input = request.data.get("domain")

    if not domain_input:
        return Response({"error": "No domain provided"}, status=status.HTTP_400_BAD_REQUEST)

    # Split the input domain
    name, ext = split_domain(domain_input)

    is_available = False

    # Generate AI suggestions (avoiding duplicate extensions)
    suggestions_raw = [
        {"domain": f"{domain_input}", "price": "$7.99", "discount": "50%"},
        {"domain": f"best{name}.com", "price": "$9.99", "discount": "30%"},
        {"domain": f"{name}-pro.net", "price": "$5.99", "discount": "40%"},
        {"domain": f"best{name}.io", "price": "$29.99", "discount": "30%"},
        {"domain": f"{name}.tech", "price": "$5.99", "discount": "40%"},
    ]

    # Add cutoff_price
    ai_suggestions = []
    for item in suggestions_raw:
        item["cutoff_price"] = calculate_cutoff(item["price"], item["discount"])
        ai_suggestions.append(item)

    return Response({
        "available": is_available,
        "domain": domain_input,
        "ai_suggestions": ai_suggestions
    })
