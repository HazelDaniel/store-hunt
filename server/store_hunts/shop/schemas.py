from drf_spectacular.types import OpenApiTypes
from drf_spectacular.utils import OpenApiParameter, extend_schema

from .serializers import ListProductSerializer

product_list_docs = extend_schema(
    responses=ListProductSerializer,
    parameters=[
        OpenApiParameter(
            name="search",
            type=OpenApiTypes.STR,
            location=OpenApiParameter.QUERY,
            description="perform search on product",
        ),
        OpenApiParameter(
            name="category",
            type=OpenApiTypes.STR,
            location=OpenApiParameter.QUERY,
            description="the category of product to retrieve",
        ),
        OpenApiParameter(
            name="brand",
            type=OpenApiTypes.STR,
            location=OpenApiParameter.QUERY,
            description="brand product to retrieve",
        ),
        OpenApiParameter(
            name="size",
            type=OpenApiTypes.STR,
            location=OpenApiParameter.QUERY,
            description="retrieve product by size",
        ),
        OpenApiParameter(
            name="min_price",
            type=OpenApiTypes.INT,
            location=OpenApiParameter.QUERY,
            description="retrieve product by size",
        ),
        OpenApiParameter(
            name="max_price",
            type=OpenApiTypes.INT,
            location=OpenApiParameter.QUERY,
            description="retrieve product by size",
        ),
    ],
)
