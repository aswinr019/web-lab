// console.log("Hello world!")

const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");
const btn = document.getElementById("btn")


btn.addEventListener("click",()=>{
    if(binary.value ){
        decimal.value = parseInt(binary.value,2);
    }
   
});