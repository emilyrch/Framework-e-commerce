# checkout_component.py
class Checkout:
    def __init__(self, cart, shipping, payment):
        self.cart = cart
        self.shipping = shipping
        self.payment = payment

    def finalize(self, method):
        total = self.cart.total_price()
        freight = self.shipping.calculate_shipping(self.cart)
        total_with_shipping = total + freight

        payment_message = self.payment.process_payment(total_with_shipping, method)

        return payment_message
