
function toUpperCase(){
let inputElement=document.querySelector('#input-area')
let input=inputElement.value;
let upperCase=input.toUpperCase()
document.querySelector('#input-area').value=upperCase;
}

function toLowerCase(){
  let inputElement=document.querySelector('#input-area')
let input=inputElement.value;
let lowerCase=input.toLowerCase()
document.querySelector('#input-area').value=lowerCase;

}

function reset(){
  let inputElement=document.querySelector('#input-area')
    inputElement.value=''   
    document.querySelector('#input-area').innerText=inputElement.value;

}