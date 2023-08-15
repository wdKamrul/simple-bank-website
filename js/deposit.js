// step-1: addEventListener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
    
  // step-2: get the deposit amount from the deposit input field
  const depositField = document.getElementById("deposit-field");
  //  step-2 থেকে ভেলু নিতে হবে .value ব্যবহার করে ।
  const depositAmount = depositField.value;

  // step-3: get the current deposit total amount
  // for non-input(Element other than input, textarea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  depositTotalElement.innerText = depositAmount;
});
