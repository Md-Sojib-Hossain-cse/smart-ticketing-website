const seats = document.querySelectorAll('.seats');

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

        console.log(remainingSeat);
    });
}