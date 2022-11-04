const area = document.getElementById("textWriter");
let arrayQ = [];
let index = 0;
let flag = true;
let textPosition = 0;
const input = document.getElementById("input");
const btn = document.getElementById("btn")
let isActive = false;

input.addEventListener("keydown",(event) =>{
    if(event.key === "Enter"){
        inputText();
    }});


btn.addEventListener("click", () => {
    if (!isActive) {
        inputText();
        isActive = true;
    } else {
        alert("Дождитесь конца функции")
    }
} )

// function loadQuote() {
//     const url = "https://api.quotable.io/random";

//     fetch(url)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw Error("Сломалось")
//         }
//     })
//     .then(data => {
//         arrayQ[index] = data.content;
//     })
//     .catch(error => alert(error));
// }


function textWriter() {
    if (flag) {
        //loadQuote();
        arrayQ[index] += ' ';
        flag = false;
    } 

    area.innerHTML = arrayQ[index].substring(0, textPosition) + '<span>\u25AE</span>';

    if(textPosition++ != arrayQ[index].length){
        setTimeout("textWriter()", 100);
    }
    else{
    // arrayQ[index] = ' ';
    //     setTimeout("textWriter()", 4000);
        textPosition = 0;
        flag = true;
        isActive = false;
    }   
    
}
      
    //window.addEventListener('load', textWriter);



async function inputText() {

    arrayQ[index] = input.value;

    await textWriter();
    
}




