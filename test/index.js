console.log("hello hai");
const content = document.getElementById("content");
const name = document.getElementById("name");
const address = document.getElementById("address");
const orderHome = document.getElementById("orderHome");
const orderTake = document.getElementById("orderTake");
const size = document.getElementById("size");
const toppingPepper = document.getElementById("pepper");
const toppingChilli = document.getElementById("chilli");
const toppingSweet = document.getElementById("sweet");
const btn = document.getElementById("btn");
const nameErr = document.getElementById("nameErr")
const addressErr = document.getElementById("addressErr")
const orderErr = document.getElementById("orderErr")
const toppingsErr = document.getElementById("toppingsErr");
const sizeErr = document.getElementById("sizeErr");

btn.addEventListener("click",(e)=>{

  let isError = false;

  nameErr.textContent="";
  addressErr.textContent="";
  orderErr.textContent="";
  toppingsErr.textContent="";
  // console.log(name.value,address.value,orderHome.value,
  //   orderTake.value,toppingPepper.value,toppingChilli.value,
  //   toppingSweet.value);

  
  if(name.value.match(/[0-9]/gi)){
    nameErr.textContent = "Name should only contain letters!";
  }
  if(name.value.length > 25 ){
    nameErr.textContent = "Name should be less than 25 characters!";
    isError = true;
  }
  if(name.value.length < 2 ){
    nameErr.textContent = "Name should be greater than 2 characters!";
    isError = true;

  }
  if(!name.value){
    nameErr.textContent = "Please enter a name!";
    isError = true;

  }

  if(!isNaN(address.value)){
    addressErr.textContent = "Address should  contain letters and number!";
  }

  if(address.value.length > 100 ){
    addressErr.textContent = "Address should be less than 100 characters!";
    isError = true;

  }
  if(address.value.length < 10 ){
    addressErr.textContent = "Address should be greater than 10 characters!";
    isError = true;

  }
  if(!address.value){
    addressErr.textContent = "Please enter an address!";
    isError = true;

  }
  if(size.value == 'select'){
    sizeErr.textContent = 'Please select a size!';
    isError = true;
  }

  if(!orderHome.checked  && !orderTake.checked){
    orderErr.textContent = "Please select a delivery method!";
    isError = true;
  }
  if(!toppingChilli.checked&&!toppingPepper.checked&&!toppingSweet.checked){
    toppingsErr.textContent = "Please select atleast one topping!";
    isError = true;
  }

  if(isError){
    e.preventDefault();
  }else{

    content.innerHTML = `<h2>PIZZA HUT</h2><p id="msg">Your order will be delivered soon!`;
  }

});

