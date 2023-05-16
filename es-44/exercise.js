const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(user) {
  let jsonUser = JSON.stringify(user);

  localStorage.setItem(user, jsonUser);
}

function getUser() {
  let userObj = localStorage.getItem(user);

  console.log(JSON.parse(userObj));
}

saveUser(user);
getUser();
