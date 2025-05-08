class Payment:
    def process_payment(self, amount, method):
        valid_methods = ["Cartão de Crédito", "PIX", "Boleto"]

        if method not in valid_methods:
            return f"Erro: Método de pagamento '{method}' não suportado."

        # Simula a resposta do pagamento
        if method == "Cartão de Crédito":
            return f"Pagamento realizado com Cartão de Crédito. Pagamento bem-sucedido!"

        elif method == "PIX":
            return f"Pagamento  realizado com PIX. Pagamento bem-sucedido!"

        elif method == "Boleto":
            return f"Pagamento realizado com Boleto. Pagamento bem-sucedido!"
        
        return f"Erro desconhecido durante o pagamento."
