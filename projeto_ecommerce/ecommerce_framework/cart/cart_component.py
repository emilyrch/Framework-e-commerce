class CartItem:
    def __init__(self, product, quantity):
        self.product = product
        self.quantity = quantity

class Cart:
    def __init__(self):
        self.items = []

    def add_to_cart(self, product_id, quantity, catalog):
        product = catalog.get_product(product_id)
        if product:
            self.items.append(CartItem(product, quantity))

    def list_cart(self):
        return self.items

    def total_price(self):
        return sum(item.product.price * item.quantity for item in self.items)

