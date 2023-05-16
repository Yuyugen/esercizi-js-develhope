async function getToDo() {
  const toDo = await fetch("https://jsonplaceholder.typicode.com/todos/4")
    .then((item) => item.json())
    .catch((err) => console.error(err));

  const container = document.querySelector("#container");

  let titleH2 = document.createElement("h2");
  titleH2.textContent = toDo.title;

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = toDo.completed;

  container.appendChild(titleH2).appendChild(checkBox);
}

getToDo();
