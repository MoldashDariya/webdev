from django.urls import path
from api.views import (companies_list, companies_detail, company_vacancies, VacancyListAPIView,
                       VacancyDetailAPIView, VacanciesTopTenAPIView)

urlpatterns = [
    path('companies/', companies_list),
    path('companies/<int:pk>/', companies_detail),
    path('companies/<int:pk>/vacancies/', company_vacancies),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    path('vacancies/top_ten/', VacanciesTopTenAPIView.as_view()),
]
