async function makeToDoList() {
  const toDos = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((val) => val.json())
    .catch((err) => console.error(err));

  let container = document.querySelector("#container");
  let titleList = document.createElement("ul");
  container.appendChild(titleList);

  for (let i = 0; i < toDos.length; i++) {
    let sborra = titleList.appendChild(document.createElement("li"));
    sborra.textContent = toDos[i].title;
  }
}

makeToDoList();
