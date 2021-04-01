//Пользователь может оформить доставку товара к себе в страну, указав ее при
//посещении страницы в prompt. Учти, пользователь может ввести имя страны не
//только буквами нижнего регистра, а к примеру 'кИтАЙ'.

//Напиши скрипт который выводит сообщение о стоимости доставки в указанную
//страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна]
//будет стоить [цена] кредитов'.

//Но доставка есть не везде, если указанной страны нет в списке, то выводи в
//alert сообщение 'В вашей стране доставка не доступна'.

//Ниже приведен список стран и стоимость доставки.

//Китай - 100 кредитов
//Чили - 250 кредитов
//Австралия - 170 кредитов
//Индия - 80 кредитов
//Ямайка - 120 кредитов

const message = "Выберите страну доставки";
let country = prompt(message).toLowerCase();
switch (country) {
  case "китай":
    alert("Доставка в Китай будет стоить 100 кредитов");
    break;
  case "чили":
    alert("Доставка в Чили будет стоить 250 кредитов");
    break;
  case "австралия":
    alert("Доставка в Австралию будет стоить 170 кредитов");
    break;
  case "индия":
    alert("Доставка в Индию будет стоить 80 кредитов");
    break;
  case "ямайка":
    alert("Доставка в Ямайку будет стоить 120 кредитов");
    break;
  default:
    alert("В вашей стране доставка не доступна");
}