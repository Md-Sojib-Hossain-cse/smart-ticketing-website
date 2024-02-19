const seats = document.querySelectorAll('.seats');
const ticketPrice = ticketPriceById('ticketPrice');
const nextButton = document.getElementById('nextButton');
const couponInput = document.getElementById('couponInput');
const couponClaimButton = document.getElementById('couponClaimButton');
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
        const pressedSeatButton = document.getElementById(pressedSeat);
        //maximum 4 sets can be selected
        if (countValue >= 4) {
            alert('You have selected maximum number of seats !');
            return;
        }
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
        //disabled selected seat after selected
        pressedSeatButton.setAttribute('disabled' , true)
        //after selecting 4 seats coupon field will be enabled
        if (countValue >= 4) {
            couponInput.removeAttribute("disabled");
            couponClaimButton.removeAttribute("disabled");
            couponClaimButton.style.backgroundColor = '#1DD100';
            return;
        }
    });
}