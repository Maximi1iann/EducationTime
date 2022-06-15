

class Order {
    constructor(price, city, type) {
        this.price = price
        this.city = city
        this.type = type
        this.id = Math.floor(Math.random() * 100)
    }

    checkPrice() {
        if(price >= 1000) {
            return true
        } else {
            return false
        }
    }

    confirmOrder() {
        if(){
            return confirmed = true;
        }
    }

    isValidType() {

    }
}

const order1 = new Order(1000, 'Lviv', ('Buy','Sell'));

console.log(order1)