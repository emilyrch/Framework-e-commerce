class Product:
    def __init__(self, product_id, name, price, image_url, weight):
        self.id = product_id
        self.name = name
        self.price = price
        self.image_url = image_url
        self.weight = weight
        
class Catalog:
    def __init__(self):
        self.products = {}

    def add_product(self, product_id, name, price,  image_url, weight):  
        self.products[product_id] = Product(product_id, name, price,  image_url, weight)

    def get_product(self, product_id):
        return self.products.get(product_id)

    def list_products(self):
        return list(self.products.values())
