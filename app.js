var billAmount = document.querySelector(".billAmount");
var cashGiven = document.querySelector(".cashGiven");
var checkButton = document.querySelector("#checkButton");
const errorMsg = document.querySelector("#error-msg");
var notesArray = [2000, 500, 100  ,20 , 10,  5 ,1];
const noOfNotes = document.querySelectorAll(".notes");

checkButton.addEventListener("click", function validateBill() {
     errorMsg.style.display = "none";
    if (billAmount.value > 0) {
        // console.log(billAmount.value)
        if (cashGiven.value > billAmount.value) {
            var amountToBeReturned = cashGiven.value - billAmount. value;
            calculateChange(amountToBeReturned);

        } else {
            makeErrorMessage("Give more Cash!!!");
        }
    } else {
        makeErrorMessage("Invalid bill amount");
    }
});

function calculateChange(amountToBeReturned){
    console.log("here");
    for(var i =0 ; i<notesArray.length ; i++){
        const numberOfnotes = Math.trunc
        (amountToBeReturned / notesArray[i]);
        amountToBeReturned %= notesArray[i];
        noOfNotes[i].innerText = numberOfnotes;
    }
}

function makeErrorMessage(msg) {
    errorMsg.style.display = "block";
    errorMsg.innerText = msg;
}