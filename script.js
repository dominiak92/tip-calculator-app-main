/* INPUT BILL */
const bill = document.querySelector("#bill");

/* INPUT CUSTOM */
const custom = document.querySelector('#custom')

/* INPUT NUMBER OF PEOPLE */
const noOfPeople = document.querySelector('#nopeople')

/*BUTTON 5%*/
const five = document.querySelector(".five");

/*BUTTON 10%*/
const ten = document.querySelector(".ten");

/*BUTTON 15%*/
const fifteen = document.querySelector(".fifteen");

/*BUTTON 25%*/
const twentyfive = document.querySelector(".twentyfive");

/*BUTTON 50%*/
const fifty = document.querySelector(".fifty");

/*BUTTON RESET*/
const reset = document.querySelector('.reset');

/* WYNIK TIPu */
const tipResult = document.querySelector('.tip-result');

/*WYNIK TOTAL */
const totalResult = document.querySelector('.total-result');

/* ERROR No Of People */
const errorpeople = document.querySelector('.error-nopeople')

/* CONTAINER NA WYNIK */
let result = [];
/* CONTAINER NA TIP */
let tip = [];




addValue = (buttonName, percent) => {
    buttonName.style.backgroundColor = "hsl(172, 67%, 45%)"
    let percentToGet = percent;
    const amount = parseInt(bill.value) 
    let percentOfValue = (percentToGet / 100) * amount; 
    result = amount + percentOfValue;
    tip = percentOfValue;
    custom.disabled = true;
}

addFive = () => {
    addValue(five, 5);
    ten.disabled = true;
    fifteen.disabled = true;
    twentyfive.disabled = true;
    fifty.disabled = true;
}

addTen = () => {
    addValue(ten, 10);
    five.disabled = true;
    fifteen.disabled = true;
    twentyfive.disabled = true;
    fifty.disabled = true;
}

addFifteen = () => {
    addValue(fifteen, 15);
    five.disabled = true;
    ten.disabled = true;
    twentyfive.disabled = true;
    fifty.disabled = true;
}

addTwentyFive = () => {
    addValue(twentyfive, 25);
    five.disabled = true;
    ten.disabled = true;
    fifteen.disabled = true;
    fifty.disabled = true;
}

addFifty = () => {
    addValue(fifty, 50);
    five.disabled = true;
    ten.disabled = true;
    fifteen.disabled = true;
    twentyfive.disabled = true;
    
}

custom.oninput = () =>{
    let percentToGet = parseInt(custom.value);
    const amount = parseInt(bill.value) 
    let customValue = (percentToGet / 100) * amount; 
    result = amount + customValue;
    tip = customValue;
    five.disabled = true;
    ten.disabled = true;
    fifteen.disabled = true;
    twentyfive.disabled = true;
    fifty.disabled = true;
}

noOfPeople.oninput = () => {
    const numberOfPeople = parseInt(noOfPeople.value)
    const fullAmount = result;
    let totalPerPerson = fullAmount / numberOfPeople
    let tipPerPerson = tip / numberOfPeople
    totalResult.innerText = '$' + (totalPerPerson).toFixed(1)
    tipResult.innerText = '$' + (tipPerPerson).toFixed(1)
    if (numberOfPeople === 0 || numberOfPeople < 0){
    noOfPeople.style.outline = "0.2vw solid red"
    errorpeople.classList.add('active');
    return false;
    } else {noOfPeople.style.outline = "0.2vw solid hsl(172, 67%, 45%)";
    errorpeople.classList.remove('active');
    return true;}
}

five.addEventListener('click', addFive)
ten.addEventListener('click', addTen)
fifteen.addEventListener('click', addFifteen)
twentyfive.addEventListener('click', addTwentyFive)
fifty.addEventListener('click', addFifty)