// const inputEl = document.querySelector("#validation-input");
const inputEl = document.querySelector('#validation-input');
const inputElLength = Number(inputEl.dataset.length);
const isValid =(event) =>{
    if(event.currentTarget.value.length === inputElLength){
        console.log("Hi");
        inputEl.classList.add("valid");
        return;
    }
    console.log("By");
    inputEl.classList.add("invalid"); 
};
inputEl.addEventListener('blur', isValid);
