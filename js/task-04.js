const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value")
let counterValue = 0;
const counterDecrement = () =>{
    counterValue -=1;
    value.textContent = counterValue;
    console.log("You clicked -1");
}
const counterIncrement = () => {
    counterValue +=1;
    value.textContent = counterValue;
    console.log("You clicked +1");
}
decrementBtn.addEventListener("click", counterDecrement);
incrementBtn.addEventListener("click", counterIncrement)
