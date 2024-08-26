/* 
The Strategy Pattern is a powerful design pattern that allows you to encapsulate a group of related algorithms,
making your code more modular, flexible, and maintainable. It is particularly useful in scenarios where you need 
to dynamically switch between different algorithms or behaviors based on the context.
Usecases are payment processing systems, sorting algorithms, compression algorithms, file export systems, navigation systems, and game development
*/

/* Without strategy pattern */
/*
class Shipping {
  constructor(company) {
    this.company = company;
  }
  calculateRate(itemWeight, totalItems) {
    switch (this.company) {
      case "Fedex":
        return 2 * itemWeight + 100 * totalItems;
      case "UPS":
        return 5 * itemWeight + 90 * totalItems;
      case "USPS":
        return 4 * itemWeight + 95 * totalItems;
      default:
        throw new Error("Unknown shipping company");
    }
  }
}

const shippingWithFedex = new Shipping("Fedex");
console.log("Fedex Rates: ", shippingWithFedex.calculateRate(100, 150));

const shippingWithUPS = new Shipping("UPS");
console.log("UPS Rates: ", shippingWithUPS.calculateRate(100, 150));

const shippingWithUSPS = new Shipping("USPS");
console.log("USPS Rates: ", shippingWithUSPS.calculateRate(100, 150));
*/

/* With strategy pattern */

class Fedex {
  calculate(itemWeight, totalItems) {
    return 2 * itemWeight + 100 * totalItems;
  }
}
class UPS {
  calculate(itemWeight, totalItems) {
    return 5 * itemWeight + 90 * totalItems;
  }
}
class USPS {
  calculate(itemWeight, totalItems) {
    return 4 * itemWeight + 95 * totalItems;
  }
}

class Shipping {
  constructor() {
    this.company = null;
  }
  setStragety(company) {
    this.company = company;
  }
  calculate(itemWeight, totalItems) {
    return this.company.calculate(itemWeight, totalItems);
  }
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const shipping = new Shipping();

shipping.setStragety(fedex);
console.log("Fedex Rates: ", shipping.calculate(100, 150));

shipping.setStragety(ups);
console.log("UPS Rates: ", shipping.calculate(100, 150));

shipping.setStragety(usps);
console.log("USPS Rates: ", shipping.calculate(150, 100));

/* Payment processor with strategy pattern */
/*
class CreditCardPayment {
  pay(amount) {
    return `Paid ${amount} using Credit card.`;
  }
}

class PayPalPayment {
  pay(amount) {
    return `Paid ${amount} using Pay Pal.`;
  }
}

class CryptoCurrenyPayment {
  pay(amount) {
    return `Paid ${amount} using CryptoCurrency.`;
  }
}

class PaymentProcessor {
  constructor() {
    this.paymentMethod = null;
  }
  setStrategy(paymentMethod) {
    this.paymentMethod = paymentMethod;
  }
  processAmount(amount) {
    return this.paymentMethod.pay(amount);
  }
}

const crediCardPayment = new CreditCardPayment();
const payPalPayment = new PayPalPayment();
const cryptoCurrenyPayment = new CryptoCurrenyPayment();

const paymentProcessor = new PaymentProcessor();

paymentProcessor.setStrategy(crediCardPayment);
console.log(paymentProcessor.processAmount(1000));

paymentProcessor.setStrategy(payPalPayment);
console.log(paymentProcessor.processAmount(2000));

paymentProcessor.setStrategy(cryptoCurrenyPayment);
console.log(paymentProcessor.processAmount(3000));
*/

/* Advantages of the Strategy Pattern
Encapsulation of Algorithms
each algorithm is encapsulated in its own class, making the code more modular and easier to maintain

Flexibility and Extensibility
new algorithms can be introduced without altering existing code. Simply create a new strategy class and use it

Reusability
strategy classes can be reused across different contexts where similar functionality is needed

Separation of Concerns
the context (e.g., Shipping class) is decoupled from the algorithm, adhering to the Single Responsibility Principle

Improved Testing
each algorithm can be tested independently, improving the overall testability of the code

Dynamic Behavior
algorithm can be changed at runtime, providing dynamic behavior based on the context or user input
*/
