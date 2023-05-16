const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user) {
  let jsonUser = JSON.stringify(user);

  localStorage.setItem(user, jsonUser);
}

saveUser(user);
