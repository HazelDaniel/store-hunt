import scrapy
from urllib.parse import urljoin


class ProductsSpider(scrapy.Spider):
    name = "products"
    allowed_domains = ["www.jumia.com.ng"]
    start_urls = [
        "https://www.jumia.com.ng/womens-fashion/?q=fashion&shipped_from=country_local&page=1#catalog-listing",
        "https://www.jumia.com.ng/mens-fashion/?q=fashion#catalog-listing",
    ]

    def parse(self, response):
        product_detail_url = response.css("a.core ::attr(href)").getall()
        for url in product_detail_url:
            joined_url = "https://" + self.allowed_domains[0] + "/" + url
            yield scrapy.Request(url=joined_url, callback=self.parse_product_info)

    def parse_product_info(self, response):
        p_name = response.css("h1.-fs20.-pts.-pbxs ::text")
        price = response.css("span.-b.-ubpt.-tal.-fs24.-prxs ::text")
        rating = response.css("div.stars._m._al ::text")
        variation = response.css("span.-fs14.-m.-upp ::text")
