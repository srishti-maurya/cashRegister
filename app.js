const billAmount = document.querySelector("#bill-amount");
const cashReceived = document.querySelector("#cash-received");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const tot = document.querySelector("#totalAmount");

const avaiableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  message.style.display = "none";
  if (billAmount.value > 0) {
    if (cashReceived.value >= billAmount.value) {
      const amountToBeReturned = cashReceived.value - billAmount.value;
      displayTotalAmount(amountToBeReturned);
      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided should atleast be equal to the bill amount"
      );
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

const calculateChange = (amountToBeReturned) => {
  for (let i = 0; i < avaiableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / avaiableNotes[i]);
    amountToBeReturned %= avaiableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
};

const showMessage = (msg) => {
  message.style.display = "block";
  message.innerText = "Error: " + msg;
};

const displayTotalAmount = (total) =>
  (tot.innerHTML = "Total amount to be returned: " + total);

const hiddenPart1 = () => {
  let x = document.getElementById("hiddenArea");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
};

const hiddenPart2 = () => {
  let y = document.getElementById("hiddenArea2");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "block";
  }
};
