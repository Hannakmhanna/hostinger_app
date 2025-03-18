from django.utils.timezone import now, localtime
from django.http import JsonResponse
from .models import Spotlight

def spotlight_data(request):
    try:
        spotlight = Spotlight.objects.first()
        if not spotlight:
            return JsonResponse({"error": "No spotlight data found"}, status=404)

        if not spotlight.deadline:
            return JsonResponse({"error": "Spotlight deadline is missing"}, status=500)

        # Convert deadline to local time
        deadline = localtime(spotlight.deadline)
        remaining_time = (deadline - now()).total_seconds()

        # If the countdown is already over, set a new default deadline (e.g., 24 hours later)
        if remaining_time <= 0:
            print("🚨 Deadline passed! Resetting countdown to 24 hours.")
            remaining_time = 86400  # 1 day in seconds

        countdown = {
            "days": str(int(remaining_time // 86400)).zfill(2),
            "hours": str(int((remaining_time % 86400) // 3600)).zfill(2),
            "minutes": str(int((remaining_time % 3600) // 60)).zfill(2),
            "seconds": str(int(remaining_time % 60)).zfill(2),
        }

        response_data = {
            "title": spotlight.title,
            "subtitle": spotlight.subtitle,
            "price": spotlight.price,
            "extra_info": spotlight.extra_info,
            "image": spotlight.image.url if spotlight.image else None,
            "countdown": countdown,
        }

        print("📡 API Response Sent:", response_data)  # Debugging
        return JsonResponse(response_data)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
