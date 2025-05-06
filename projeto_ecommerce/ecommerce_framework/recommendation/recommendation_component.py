class Recommendation:
    def __init__(self, catalog):
        self.catalog = catalog

    def recommend(self, user_id):
        # Retorna objetos do catálogo, por exemplo os produtos de ID 1 e 2
        return [
            self.catalog.get_product(1),
            self.catalog.get_product(2)
        ]
