from django.contrib.postgres.search import SearchQuery, SearchRank, SearchVector
from django_filters import rest_framework as filters
from products.models import Category, Product


def get_descendant_categories(category):
    """
    get all descendant of a parent category
    """
    descendants = set()
    nodes = [category]
    while nodes:
        node = nodes.pop()
        descendants.add(node)
        nodes.extend(node.child.all())
    return descendants


class ProductFilter(filters.FilterSet):
    brand = filters.CharFilter("brand__name")
    min_price = filters.NumberFilter(
        field_name="product_detail__price", lookup_expr="gte"
    )
    max_price = filters.NumberFilter(
        field_name="product_detail__price", lookup_expr="lte"
    )
    category = filters.CharFilter(method="filter_by_category")

    class Meta:
        model = Product
        fields = ("brand", "category", "max_price", "min_price")

    def filter_by_category(self, queryset, name, value):
        try:
            category = Category.objects.filter(name__icontains=value)
        except Category.DoesNotExist:
            return queryset.none()
        lst = []
        for category in category:
            descendant_categories = get_descendant_categories(category)
            lst += descendant_categories
        query = queryset.filter(category__in=lst)
        return query
