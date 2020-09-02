from django.views.generic import ListView, View
from django.http import JsonResponse
from django.shortcuts import render
from .models import House



class HouseList(ListView):
    model = House
    template_name = 'houseprice_ajax/house.html'
    context_object_name = 'house_list'


class HouseCreate(View):
    def get(self, request):
        suburb = request.GET.get('suburb', None)
        address = request.GET.get('address', None)
        rooms = request.GET.get('rooms', None)
        house_type = request.GET.get('house_type', None)
        price = request.GET.get('price', None)
        method = request.GET.get('method', None)
        date = request.GET.get('date', None)

        obj = House.objects.create(
            suburb = suburb,
            address = address,
            rooms = rooms,
            house_type = house_type,
            price = price,
            method = method,
            date = date,

        )

        house = {'id': obj.id, 'suburb': obj.suburb, 'address': obj.address, 'rooms': obj.rooms,
                'house_type': obj.house_type, 'price': obj.price, 'method':obj.method, 'date':obj.date }
        
        data = {
            'house': house
        }

        return JsonResponse(data)


class UpdateHouse(View):

    def get(self, request):
        id1 = request.GET.get('id', None)
        suburb = request.GET.get('suburb', None)
        address = request.GET.get('address', None)
        rooms = request.GET.get('rooms', None)
        house_type = request.GET.get('house_type', None)
        price = request.GET.get('price', None)
        method = request.GET.get('method', None)
        date = request.GET.get('date', None)

        obj = House.objects.get(id=id1)
        obj.suburb = suburb
        obj.address = address
        obj.rooms = rooms
        obj.house_type = house_type
        obj.price = price
        obj.method = method
        obj.date = date  
        obj.save()

        

        house = {'id': obj.id, 'suburb': obj.suburb, 'address': obj.address, 'rooms': obj.rooms,
                'house_type': obj.house_type, 'price': obj.price, 'method':obj.method, 'date':obj.date }
        
        data = {
            'house': house
        }

        return JsonResponse(data)


class DeleteHouse(View):
    def get(self, request):
        id = request.GET.get('id', None)
        House.objects.get(id=id).delete()

        data = {
            'deleted': True

        }
        return JsonResponse(data)


        




