// change color and bg color by id 
function addColorById(elementId){
    const element = document.getElementById(elementId);
    element.style.color = 'white';
    element.style.backgroundColor ='#1DD100';
}

// get element by Id
function getInnerValueById (elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}
//set element value by id
function setInnerValueById (elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}