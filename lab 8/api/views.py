from .models import Product, Category
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.http import HttpResponse


def product_list(request):
    products = Product.objects.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

def product_by_id(request, product_id):
    product = get_object_or_404(Product,id=product_id)
    data = {'product': {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category_id': product.category.id,
        'category_name': product.category.name,
    }}
    return JsonResponse(data)

def category_list(request):
    category = Category.objects.all()
    data = {'categories': list(category.values())}
    return JsonResponse(data)

def category_by_id(request, category_id):
    category = get_object_or_404(Category,id=category_id)
    data = {'category': {
        "id": category.id,
        "name":category.name,
        "products_in_category": list(category.product_set.values('id','name'))
    }}
    return JsonResponse(data)

def category_products(request, category_id):
    category = get_object_or_404(Category,id=category_id)
    products = category.product_set.all()
    data = {'products': list(products.values())}
    return JsonResponse(data)

def index(request):
    return HttpResponse("Okay, project is available")
