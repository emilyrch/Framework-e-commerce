from flask import Flask, render_template, request, redirect, url_for
import sys
import os

# Adiciona o caminho do framework para importar os módulos
sys.path.append(os.path.abspath("../ecommerce_framework"))

from catalog.catalog_component import Catalog
from cart.cart_component import Cart
from shipping.shipping_component import Shipping
from payment.payment_component import Payment
from checkout.checkout_component import Checkout
from recommendation.recommendation_component import Recommendation

app = Flask(__name__)

# Instâncias dos componentes
catalog = Catalog()
cart = Cart()
shipping = Shipping()
payment = Payment()
recommendation = Recommendation(catalog)


# Adiciona produtos ao catálogo
catalog.add_product(1, "MacBook Apple", 11.4500, "imagens/mac.png", weight=2.5)
catalog.add_product(2, "Notebook Dell Inspiron 15", 3500.0, "imagens/notebook_dell_dois.png", weight=2.5)
catalog.add_product(3, "Mouse Gamer", 150.0, "imagens/mouse.png", weight=2.5)
catalog.add_product(4, "Monitor Samsung''", 800.0, "imagens/monitor.png", weight=2.5)
catalog.add_product(5, "Notebook Gamer Avell Storm 350", 6500.0, "imagens/avell_storm.png", weight=2.5)
catalog.add_product(6, "Kit Teclado Gamer", 6500.0, "imagens/kit_teclado.png", weight=2.5)

@app.route("/")
def index():
    products = catalog.list_products()
    recommendations = recommendation.recommend(user_id=1)
    return render_template("index.html", products=products, recommendations=recommendations)

@app.route("/add_to_cart/<int:product_id>")
def add_to_cart(product_id):
    cart.add_to_cart(product_id, 1, catalog)
    return redirect(url_for('view_cart'))

@app.route("/cart")
def view_cart():
    total_weight = sum(item.product.weight * item.quantity for item in cart.list_cart())  
    shipping_cost = shipping.calculate_shipping(total_weight)  
    return render_template("cart.html", items=cart.list_cart(), total=cart.total_price(), shipping_cost=shipping_cost)

@app.route("/checkout", methods=["GET", "POST"])
def do_checkout():
    if request.method == "POST":
        method = request.form["payment_method"]
        checkout = Checkout(cart, shipping, payment)
        message = checkout.finalize(method)
        return render_template("checkout.html", message=message)
    return render_template("checkout.html")

if __name__ == "__main__":
    app.run(debug=True)

