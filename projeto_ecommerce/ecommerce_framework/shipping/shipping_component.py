class Shipping:
    def calculate_shipping(self, total_weight):
        if total_weight <= 2:
            return 10.0  
        elif total_weight <= 5:
            return 20.0 
        else:
            return 30.0  
