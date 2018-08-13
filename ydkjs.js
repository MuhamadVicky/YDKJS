var bankAccount = 0;
let phone1Price = 200;
let accessory1Price = 9.99;
let taxRate = 0.05;
let spendingThreshold = 0;
var a  = true;
var number = 1;

bankAccount = prompt("please add your bank account balance.");
while (a) {
  var calculatePhone = calculate(phone1Price, accessory1Price);  
  console.log((calculatePhone).toFixed(2) + " $");
  checkBalance(calculatePhone);
  
}

function calculate(phonePrice,accessory){
  total =  (phonePrice + accessory);
  let tax = total + (spendingThreshold * taxRate);
  return (tax);  
}


function checkBalance(calculatePhone){
  if (bankAccount >= Math.round(calculatePhone)){
    bankAccount = bankAccount - calculatePhone;
    spendingThreshold += (calculatePhone);
    console.log("Purchase Order " + number + " Completed");
    number += 1;
  }
  else {
    console.log("You dont have insufficient balance!");
    console.log("Your balance is " + (bankAccount).toFixed(2) + " $");
    console.log("Your spending is " + spendingThreshold.toFixed (2));
    a = false;
  }
}
  