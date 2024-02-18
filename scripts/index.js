const seats = document.querySelectorAll('.seats');
const ticketPrice = ticketPriceById('ticketPrice');

for(const seat of seats){
    seat.addEventListener('click' , function(e){
        const pressedSeat = e.target.innerText;
        // seat color & bg color changed 
        addColorById(pressedSeat);
        //remaining seat calculate
        const remainingSeatValue = getInnerValueById('remainingSeatCount');
        const remainingSeat = remainingSeatValue - 1;
        setInnerValueById('remainingSeatCount' , remainingSeat);
        //selected seat count increase 
        const newCountValue = increaseCounterValueById('selectedseatCount');
        setInnerValueById('selectedseatCount', newCountValue);
        //adding selected seat details
        addingSelectedSeatDetailsById('selectedSeatDetails' , pressedSeat ,ticketPrice);
        //total price update
        const updatedTotalPrice = updateElementValueById('totalPrice' , ticketPrice);
        setInnerValueById('totalPrice',updatedTotalPrice);
        //grand total update
        const GrandTotalPrice = updateGrandTotalPrice('grandTotal' , updatedTotalPrice);
        setInnerValueById('grandTotal' , GrandTotalPrice)
        console.log(GrandTotalPrice);
    });
}