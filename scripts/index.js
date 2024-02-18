const seats = document.querySelectorAll('.seats');
const ticketPrice = ticketPriceById('ticketPrice');
const nextButton = document.getElementById('nextButton');
let countValue = 0;

userNumber.addEventListener('input', function (e) {
    const lengthOfInput = e.target.value;
    const lengthOfInputFeild = lengthOfInput.length;
    if (lengthOfInputFeild == 0 || countValue == 0) {
        const nextButton = document.getElementById('nextButton');
        nextButton.setAttribute("disabled", true);
        nextButton.style.backgroundColor = '#F7F8F8';
    }
    else if (lengthOfInputFeild >= 1 && countValue >= 1) {
        const nextButton = document.getElementById('nextButton');
        nextButton.removeAttribute("disabled");
        nextButton.style.backgroundColor = '#1DD100';
    }
})

for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        const pressedSeat = e.target.innerText;
        // seat color & bg color changed 
        addColorById(pressedSeat);
        //remaining seat calculate
        const remainingSeatValue = getInnerValueById('remainingSeatCount');
        const remainingSeat = remainingSeatValue - 1;
        setInnerValueById('remainingSeatCount', remainingSeat);
        //selected seat count increase 
        const newCountValue = increaseCounterValueById('selectedseatCount');
        setInnerValueById('selectedseatCount', newCountValue);
        //adding selected seat details
        addingSelectedSeatDetailsById('selectedSeatDetails', pressedSeat, ticketPrice);
        //total price update
        const updatedTotalPrice = updateElementValueById('totalPrice', ticketPrice);
        setInnerValueById('totalPrice', updatedTotalPrice);
        //grand total update
        const GrandTotalPrice = updateGrandTotalPrice(updatedTotalPrice);
        setInnerValueById('grandTotal', GrandTotalPrice);
        countValue++;
        //next button enabled
        const numberLength = numberValueLength('userNumber');
        if (numberLength >= 1 && countValue >= 1) {
            const nextButton = document.getElementById('nextButton');
            nextButton.removeAttribute("disabled");
            nextButton.style.backgroundColor = '#1DD100';
        }
    });
}