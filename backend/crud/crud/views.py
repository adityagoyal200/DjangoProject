from django.http import FileResponse
import os

def home(request):
    # Absolute path to the React build's index.html file
    react_build_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../frontend/dist/index.html')
    
    # Ensure the path is correct and the file exists
    if os.path.exists(react_build_path):
        return FileResponse(open(react_build_path, 'rb'), content_type='text/html')
    else:
        return HttpResponse('Error: React build directory not found', status=404)
