from .views import HouseCreate, HouseList, UpdateHouse, DeleteHouse
from django.urls import path


urlpatterns = [
    path('', HouseList.as_view(), name='house_list'),
    path('house/add/', HouseCreate.as_view(), name='house_create'),
    path('house/update/', UpdateHouse.as_view(), name='house_update' ),
    path('house/delete/', DeleteHouse.as_view(), name='house_delete' ),
   
   
]