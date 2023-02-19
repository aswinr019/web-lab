//input elements
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const male = document.getElementById("genderMale");
const female = document.getElementById("genderFemale");
const other = document.getElementById("genderOther");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const pswrd = document.getElementById("password");
const confrmPswrd = document.getElementById("passwordConfirm");

const file = document.getElementById("file");

const btn = document.getElementById("btn");

//error elements
const fnameErr = document.getElementById("fnameErr");
const lnameErr = document.getElementById("lnameErr");
const dobErr = document.getElementById("dobErr");
const emailErr = document.getElementById("emailErr");
const mobileErr = document.getElementById("mobileErr");
const genderErr = document.getElementById("genderErr");
const addressErr = document.getElementById("addressErr");
const pincodeErr = document.getElementById("pincodeErr");
const cityErr = document.getElementById("cityErr");
const stateErr = document.getElementById("stateErr");
const countryErr = document.getElementById("countryErr");
const hobbiesErr = document.getElementById("hobbiesErr");
const fileErr = document.getElementById("fileErr");
const pswrdErr = document.getElementById("passwordErr");
const confrmPswrdErr = document.getElementById("passwordConfirmErr");

btn.addEventListener("click", (e) => {
  let isError = false;
  // e.preventDefault();

  fnameErr.textContent = "";
  lnameErr.textContent = "";
  emailErr.textContent = "";
  mobileErr.textContent = "";
  dobErr.textContent = "";
  genderErr.textContent = "";
  addressErr.textContent = "";
  pincodeErr.textContent = "";
  cityErr.textContent = "";
  stateErr.textContent = "";
  countryErr.textContent = "";
  fileErr.textContent = "";
  pswrdErr.textContent = "";
  confrmPswrdErr.textContent = "";

  if (!fname.value.match(/[a-zA-Z]/g)) {
    fnameErr.textContent = "First name should only contain letters!";
    isError = true;
  }

  if (fname.value.length > 20) {
    fnameErr.textContent = "First name must be less than 20 characters";
    isError = true;
  }
  if (fname.value.length < 3) {
    fnameErr.textContent = "First name must be greater than two characters";
    isError = true;
  }

  if (!fname.value) {
    fnameErr.textContent = "Please enter a first name!";
    isError = true;
  }

  if (!lname.value.match(/[a-zA-Z]/g)) {
    lnameErr.textContent = "Last name should only contain letters!";
    isError = true;
  }
  if (lname.value.length > 20) {
    fnameErr.textContent = "Last name must be less than 20 characters";
    isError = true;
  }

  if (!lname.value) {
    lnameErr.textContent = "Please enter a last name!";
    isError = true;
  }

  if (!email.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/g)) {
    emailErr.textContent =
      "Email should be a comination of letters numbers @ and .";
    isError = true;
  }

  if (!email.value) {
    emailErr.textContent = "Please enter an email!";
    isError = true;
  }

  if (mobile.value.length != 10 ) {
    mobileErr.textContent = "Mobile number should contain 10 digits!";
    isError = true;
  }

  if (isNaN(mobile.value)) {
    mobileErr.textContent = "Mobile Number should only contain digits!";
    isError = true;
  }

  if (!mobile.value) {
    mobileErr.textContent = "Please enter a mobile number!";
    isError = true;
  }

  if (!dob.value) {
    dobErr.textContent = "Please enter a  dob!";
    isError = true;
  }

  if (address.value.length < 10) {
    addressErr.textContent = "Address should be greater than ten characters!";
    isError = true;
  }

  if (!address.value) {
    addressErr.textContent = "Please enter an address!";
    isError = true;
  }

  if (!male.checked && !female.checked && !other.checked) {
    genderErr.textContent = "Please select a gender!";
    isError = true;
  }

  if (pincode.value.length < 5) {
    pincodeErr.textContent = "Pincode should be greater than five characters!";
    isError = true;
  }

  if (isNaN(pincode.value)) {
    pincodeErr.textContent = "Pincode should be a number!";
    isError = true;
  }

  if (!pincode.value) {
    pincodeErr.textContent = "Please enter a pincode!";
    isError = true;
  }

  if (city.value.length < 2) {
    cityErr.textContent = "City should be greater than  two characters!";
    isError = true;
  }

  if (!city.value) {
    cityErr.textContent = "Please enter a city!";
    isError = true;
  }

  if (state.value.length < 2) {
    stateErr.textContent = "State should be greater than  two characters!";
    isError = true;
  }

  if (!state.value) {
    stateErr.textContent = "Please enter a state!";
    isError = true;
  }

  if (country.value.length < 2) {
    countryErr.textContent = "Country should be greater than  two characters!";
    isError = true;
  }

  if (!country.value) {
    countryErr.textContent = "Please enter a country!";
    isError = true;
  }

  if (file.files.length == 0) {
    fileErr.textContent = "Please choose a file!";
    isError = true;
  }

  if (!pswrd.value.match(/[a-zA-Z0-9]*[a-zA-Z0-9]*[a-zA-Z0-9]/g)) {
    pswrdErr.textContent =
      "Password should be a combination of letters numbers and special characters";
    isError = true;
  }


  if (pswrd.value.length > 20) {
    pswrdErr.textContent = "Password should be less than 20 characters";
    isError = true;
  }

  if (pswrd.value.length < 6) {
    pswrdErr.textContent = "Password should be grater than 6 characters";
    isError = true;
  }

  

  if (!pswrd.value) {
    pswrdErr.textContent = "Please enter a password!";
    isError = true;
  }



  if (pswrd.value != confrmPswrd.value) {
    confrmPswrdErr.textContent = "The passwords don't match!";
    isError = true;
  }

  if (!confrmPswrd.value) {
    confrmPswrdErr.textContent = "Please re-enter the password!";
    isError = true;
  }
  
  if (isError) {
    e.preventDefault();
  }
});
