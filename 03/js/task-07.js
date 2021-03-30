'use strict';
//Напиши скрипт управления личным кабинетом интернет банка. Есть объект account
// в котором необходимо реализовать методы для работы с балансом и историей
// транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return { id: amount + 1, amount, type };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    const debitTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT,
    );
    this.transactions.push(debitTransaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      alert(
        `На Вашем счету недостаточно средств. Вы распологате суммой ${this.balance}.`,
      );
    } else {
      this.balance -= amount;
      const withdrawTransaction = this.createTransaction(
        amount,
        Transaction.WITHDRAW,
      );
      this.transactions.push(withdrawTransaction);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'No transaction with this id';
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalOfType = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalOfType += transaction.amount;
      }
    }
    return totalOfType;
  },
};

account.deposit(300);
account.withdraw(100);

console.log(account.getBalance());
console.log(account);
console.log(account.getTransactionDetails(101));
console.log(account.getTransactionTotal('deposit'));
console.log(account);
account.deposit(10000);
console.log(account);
console.log(account.getTransactionTotal('deposit'));
console.log(account);
