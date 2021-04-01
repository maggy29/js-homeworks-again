//На счету пользователя есть 23580 кредитов, значение хранится в переменной
//credits (создай и присвой). Пользователь решает купить ремонтных дроидов,
//которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в
//переменной pricePerDroid (создай и присвой).

//При посещении страницы, используя prompt, необходимо спросить количество
//дроидов которые пользователь хочет купить и сохранить в переменную.

//Напиши скрипт который:

//Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено
// пользователем!'.
//В противном случае, рассчитывает общую цену заказа и сохраняет в переменной
//totalPrice.
//Проверяет сможет ли пользователь оплатить заказ:

//если сумма к оплате превышает количество кредитов на счету, выводи в консоль
// сообщение 'Недостаточно средств на счету!'.
//в противном случае необходимо посчитать остаток кредитов на счету и вывести
//сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

const credits = 23580;
const pricePerDroid = 3000;
let message = "How many droirs You want to purchase?";
let result = prompt(message);
let totalPrice = result * pricePerDroid;
console.log(result);
if (result === null) {
  console.log("Canceled by User!");
} else if (totalPrice > credits) {
  console.log("Insufficient funds on the account!");
} else {
  console.log(
    `You have purchased ${result} of droids and have ${
      credits - totalPrice
    } credits left in your account.`
  );
}
