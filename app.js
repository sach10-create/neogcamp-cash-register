var billAmount = document.querySelector(".billAmount");
var cashGiven = document.querySelector(".cashGiven");
var checkButton = document.querySelector("#checkButton");
const errorMsg = document.querySelector("#error-msg");

checkButton.addEventListener("click", function validateBill() {
     errorMsg.style.display = "none";
    if (billAmount.value > 0) {
        console.log(billAmount.value)
        if (cashGiven.value >= billAmount.value) {

        } else {
            makeErrorMessage("Give more Cash!!!");
        }
    } else {
        makeErrorMessage("Invalid bill amount");
    }
});

function makeErrorMessage(msg) {
    errorMsg.style.display = "block";
    errorMsg.innerText = msg;
}