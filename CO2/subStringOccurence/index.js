const stringInput = document.getElementById("string");
const subStringInput = document.getElementById("subStr");
const btn = document.getElementById("btn");
const countElm = document.getElementById("count");
let string ;
let subString;
let count;

btn.addEventListener("click",function(){

    string =  stringInput.value;
    subString = subStringInput.value;

    console.log(string,subString);
    if(string && subString){

        let regx= new RegExp(subString, "gi");
        count = (string.match(regx) || [] ).length;
        console.log(count);

        countElm.textContent = count;

    }

});