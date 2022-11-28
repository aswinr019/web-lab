//input elements
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
// const gender = document.querySelectorAll("#gender");
const male = document.getElementById("genderMale");
const female = document.getElementById("genderFemale");
const other = document.getElementById("genderOther");
const address = document.getElementById("address");
const pincode = document.getElementById("pincode");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
// const hobbies = document.querySelectorAll("#hobbies");
const reading = document.getElementById("reading");
const writing = document.getElementById("writing");
const music = document.getElementById("music");
const file = document.getElementById("file");

const btn = document.getElementById("btn");

//error elements
const fnameErr = document.getElementById("fnameErr");
const lnameErr = document.getElementById("lnameErr");
const dobErr = document.getElementById("dobErr");
const genderErr = document.getElementById("genderErr");
const addressErr = document.getElementById("addressErr");
const pincodeErr = document.getElementById("pincodeErr");
const cityErr = document.getElementById("cityErr");
const stateErr = document.getElementById("stateErr");
const countryErr = document.getElementById("countryErr");
const hobbiesErr = document.getElementById("hobbiesErr");
const fileErr = document.getElementById("fileErr");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  fnameErr.textContent = "";
  lnameErr.textContent = "";
  emailErr.textContent = "";
  dobErr.textContent = "";
  genderErr.textContent = "";
  addressErr.textContent = "";
  pincodeErr.textContent = "";
  cityErr.textContent = "";
  stateErr.textContent = "";
  countryErr.textContent = "";
  hobbiesErr.textContent = "";
  fileErr.textContent = "";

  if (fname.value.length < 3) {
    fnameErr.textContent = "First name must be greater than two characters";
  }

  if (!fname.value) {
    fnameErr.textContent = "Please enter a first name!";
  }

  if (!lname.value) {
    lnameErr.textContent = "Please enter a last name!";
  }

  if (!email.value.match("@")) {
    emailErr.textContent = "Email id must contain an @ symbol !";
  }

  if (!email.value) {
    emailErr.textContent = "Please enter an email!";
  }

  if (!day.value || !month.value || !year.value) {
    dobErr.textContent = "Please enter a valid dob!";
  }

  if (address.value.length < 10) {
    addressErr.textContent = "Address should be greater than ten characters!";
  }

  if (!address.value) {
    addressErr.textContent = "Please enter an address!";
  }

  if (!male.checked && !female.checked && !other.checked) {
    genderErr.textContent = "Please select a gender!";
  }

  if (pincode.value.length < 5) {
    pincodeErr.textContent = "Pincode should be greater than five characters!";
  }

  if (isNaN(pincode.value)) {
    pincodeErr.textContent = "Pincode should be a number!";
  }

  if (!pincode.value) {
    pincodeErr.textContent = "Please enter a pincode!";
  }

  if (city.value.length < 2) {
    cityErr.textContent = "City should be greater than  two characters!";
  }

  if (!city.value) {
    cityErr.textContent = "Please enter a city!";
  }

  if (state.value.length < 2) {
    stateErr.textContent = "State should be greater than  two characters!";
  }

  if (!state.value) {
    stateErr.textContent = "Please enter a state!";
  }

  if (country.value.length < 2) {
    countryErr.textContent = "Country should be greater than  two characters!";
  }

  if (!country.value) {
    countryErr.textContent = "Please enter a country!";
  }

  if (!reading.checked && !writing.checked && !music.checked) {
    hobbiesErr.textContent = "Please select a hobby!";
  }

  if (file.files.length == 0) {
    fileErr.textContent = "Please choose a file!";
  }
});
