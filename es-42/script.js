let form = document.querySelector("form");
let todoTitle = document.getElementById("todo-title");
let checkbox = document.getElementById("todo-completed");

form.addEventListener("submit", async (val) => {
  val.preventDefault();

  const post = {
    title: todoTitle.value,
    completed: checkbox.checked,
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
});
