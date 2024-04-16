from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password


User = get_user_model()
class UserRegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)
    token = serializers.CharField(source='get_token', read_only=True)
    class Meta:
        model = User
        fields =  [
            'first_name',
            'last_name',
            'email',
            'password',
            'confirm_password',
            'token'
        ]
        extra_kwargs = {
            'password' : {'write_only': True, 'required': True}
        }

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError('confirm password must be the same as password')
        
        return data
    
    def create(self, validated_data):
        password = validated_data.pop('confirm_password')
        validated_data['password'] = make_password(password)
        user = User.objects.create(**validated_data)
        user.save()
        #TODO send email
        return user 