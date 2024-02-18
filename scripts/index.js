const seats = document.querySelectorAll('.seats');

for(const seat of seats){
    seat.addEventListener('click' , function(e){
        const pressedSeat = e.target.innerText;
    })
}