// ==============================
// 1. USER OBJECT
// ==============================
let user = {
  name: 'Sachin',
  sayHello() {
    console.log('Hello ' + this.name);
  },
};

user.sayHello();

// ==============================
// 2. PRODUCT OBJECT
// ==============================
let product = {
  name: 'Phone',
  price: 15000,
  quantity: 2,

  totalPrice() {
    console.log(this.price * this.quantity);
  },
};

product.totalPrice();

// ==============================
// 3. CALCULATOR OBJECT
// ==============================
let calculator = {
  add(a, b) {
    console.log(a + b);
  },
};

calculator.add(10, 5);

// ==============================
// 4. CART OBJECT
// ==============================
let cart = {
  item: 'Shoes',
  price: 2000,
  quantity: 2,

  updateQuantity(q) {
    this.quantity = q;
  },

  total() {
    console.log(this.price * this.quantity);
  },
};

cart.updateQuantity(3);
cart.total();

// ==============================
// 5. BANK ACCOUNT OBJECT
// ==============================
let bankAccount = {
  owner: 'Sachin',
  balance: 5000,

  deposit(amount) {
    this.balance += amount;
    console.log('Deposited:', amount);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient Balance');
    } else {
      this.balance -= amount;
      console.log('Withdrawn:', amount);
    }
  },

  checkBalance() {
    console.log('Balance:', this.balance);
  },
};

bankAccount.deposit(2000);
bankAccount.withdraw(3000);
bankAccount.checkBalance();

// ==============================
// 6. STUDENT OBJECT
// ==============================
let student = {
  name: 'Chetan',
  marks: [80, 75, 90],

  getAverage() {
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
      total += this.marks[i];
    }
    console.log('Average:', total / this.marks.length);
  },
};

student.getAverage();
