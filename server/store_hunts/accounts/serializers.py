from rest_framework import serializers
from django.contrib.auth import get_user_model



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



class UserLoginView(serializers.ModelSerializer):
    full_name = serializers.CharField(source='get_name', read_only=True)
    class Meta:
        models = User
        fields = (
            'id',
            'email',
            'password',
            'is_superuser',
            'is_seller',
            
        )
        extra_kwargs = {
            'password' : {'write_only':True, 'required': True},
            'email': {'required': True},
            'id': {'read_only': True},
            'is_superuser': {'read_only': True},
            'is_seller': {'read_only': True},
            'created_at': {'read_only': True},
            'profile_pic': {'read_only': True}
        } 