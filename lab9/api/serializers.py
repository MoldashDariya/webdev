from rest_framework import serializers

from api.models import Company, Vacancy


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        instance = Company(name=validated_data.get('name'),
                           description=validated_data.get('description'),
                           city=validated_data.get('city'),
                           address=validated_data.get('address'))
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance


class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())

    def create(self, validated_data):
        instance = Vacancy(name=validated_data.get('name'),
                           description=validated_data.get('description'),
                           salary=validated_data.get('salary'),
                           company=validated_data.get('company'))
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance
