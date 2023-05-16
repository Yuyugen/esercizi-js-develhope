let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll(".form-input");

for (let i = 0; i < labels.length; i++) {
  console.log(labels[i].textContent + " " + inputs[i].value);
}
