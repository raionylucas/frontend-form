const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");

function setError(index) {
  campos[index].style.border = "2px solid #FF5858";
  spans[index].style.display = "block";
}

function setValidate(index) {
  campos[index].style.border = "none";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].value.length < 3) {
    console.log("Nome deve ter 3 caracteres");
    setError(0);
  } else {
    console.log("Validado o nome");
    setValidate(0);
  }
}

function emailValidate() {
  if (emailRegex.test(campos[1].value)) {
    setValidate(1);
  } else {
    setError(1);
  }
}

function passwordCharValidate() {
  if (campos[2].value.length < 8) {
    setError(2);
  } else {
    setValidate(2);
  }
}

function passwordValidate() {
  if (campos[3].value != campos[2].value) {
    setError(3);
  } else {
    setValidate(3);
  }
}
