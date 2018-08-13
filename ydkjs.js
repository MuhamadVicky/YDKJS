var bankAccount = 220;
let phone1Price = 200;
let accessory1Price = 9.99;
let taxRate = 0.05;
let spendingThreshold = 0;
var a  = true;

while (a) {
  calculatePhone = calculate(phone1Price, accessory1Price);
  console.log(Math.round(calculatePhone) + " $");
  checkBalance(calculatePhone);
  
}

function calculate(phonePrice,accessory){
  spendingThreshold = phonePrice + accessory;
  let tax = spendingThreshold + (spendingThreshold * taxRate);
  return tax;  
}


function checkBalance(calculatePhone){
  if (calculatePhone < bankAccount){
    bankAccount = bankAccount - calculatePhone;
  }
  else {
    console.log("You dont have insufficient balance!");
    console.log("Your balance is " + Math.round(bankAccount) + " $");
    a = false;
  }
}
  