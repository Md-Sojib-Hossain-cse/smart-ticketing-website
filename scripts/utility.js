//ticket price
function ticketPriceById(elementId) {
    const ticketPriceElement = document.getElementById(elementId);
    const ticketPriceElementText = ticketPriceElement.innerText;
    const ticketPriceValue = parseInt(ticketPriceElementText);
    return ticketPriceValue;
}
// change color and bg color by id 
function addColorById(elementId) {
    const element = document.getElementById(elementId);
    element.style.color = 'white';
    element.style.backgroundColor = '#1DD100';
}

// get element by Id
function getInnerValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}
//set element value by id
function setInnerValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

//increase counter value by Id
function increaseCounterValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    const elementNewValue = elementValue + 1;
    return elementNewValue;
}

// adding selected seat by id
function addingSelectedSeatDetailsById(elementId, seatName, seatPrice) {
    const container = document.getElementById(elementId);

    const div = document.createElement('div');

    const p1 = document.createElement('p');
    p1.innerText = seatName;
    const p2 = document.createElement('p');
    p2.innerText = 'Economoy';
    const p3 = document.createElement('p');
    p3.innerText = seatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';
    container.appendChild(div);
}

//update element value by Id and given value
function updateElementValueById(elementId, ticketPrice) {
    const currentTotalPriceElement = document.getElementById(elementId);
    const currentTotalPriceText = currentTotalPriceElement.innerText;
    const currentTotalPrice = parseInt(currentTotalPriceText);
    const updatedTotalPrice = currentTotalPrice + ticketPrice;
    return updatedTotalPrice;
}

//update Grand Total Price 
function updateGrandTotalPrice(updatedTotalPrice) {
    const updatedGrandTotalPrice = updatedTotalPrice;
    return updatedGrandTotalPrice;
}

//number field value
function numberValueLength(elementId) {
    const numberValue = document.getElementById(elementId).value;
    const numberValueLength = numberValue.length;
    return numberValueLength;
}