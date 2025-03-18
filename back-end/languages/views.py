from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Language
from .serializers import LanguageSerializer

@api_view(['GET'])
def get_languages(request):
    languages = Language.objects.all()
    serializer = LanguageSerializer(languages, many=True, context={"request": request})
    return Response(serializer.data)


