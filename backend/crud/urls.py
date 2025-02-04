from django.urls import path
from .views import home

urlpatterns = [
    path('', home, name='home'),  # Serve React app at the root URL
]
