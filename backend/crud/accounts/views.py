from django.shortcuts import redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register_page(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body) 
            first_name = data.get('first_name')
            last_name = data.get('last_name')
            email = data.get('email')
            password = data.get('password')

            if User.objects.filter(username=email).exists():
                return JsonResponse({'error': 'Email is already taken'}, status=400)

            user_obj = User.objects.create_user(
                first_name=first_name,
                last_name=last_name,
                email=email,
                username=email,
                password=password
            )
            user_obj.save()

            return JsonResponse({'message': 'User registered successfully'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def login_page(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)  # Parse JSON request
            email = data.get('email')
            password = data.get('password')

            user_obj = User.objects.filter(username=email).first()
            if not user_obj:
                return JsonResponse({'error': 'Account not found'}, status=404)

            user = authenticate(username=email, password=password)
            if user:
                login(request, user)
                return JsonResponse({'message': 'Login successful'}, status=200)

            return JsonResponse({'error': 'Invalid credentials'}, status=401)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)


@csrf_exempt
def logout_page(request):
    if request.method == 'POST':
        logout(request)
        return JsonResponse({'message': 'Logout successful'}, status=200)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
