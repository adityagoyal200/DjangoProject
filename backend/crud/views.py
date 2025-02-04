from django.shortcuts import render
import os

def home(request):
    # Absolute path to the React build's index.html file
    react_build_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '../../frontend/dist/index.html')

    try:
        return render(request, react_build_path)
    except FileNotFoundError:
        return HttpResponse('Error: React build directory not found', status=404)
