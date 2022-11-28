

const stringInpt = document.getElementById("string");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    if(stringInpt.value == ''){
        para.textContent = " string is empty"
    }
    else {
        para.textContent = " string is not empty"
    }
});

