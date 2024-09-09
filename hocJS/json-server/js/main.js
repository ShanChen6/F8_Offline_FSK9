const userEndpoint = "http://localhost:3000/users";

let selectedUserId = null;

const getUser = async () => {
  const data = await fetch(userEndpoint);
  const users = await data.json();
  return users;
};

const main = async () => {
  const users = await getUser();
  const element = document.getElementById("list-user");
  let newElement = "";
  users.forEach((user) => {
    newElement += `<li style="padding: 5px">${user.name}<button onclick="handleClickEdit('${user.name}')">edit</button><button>del</button></li>`;
  });
  // console.log(users);
  element.innerHTML = `<div class="list-user"><ul>${newElement}</ul></div>`;
};

const handleClickEdit = (user) => {
  // console.log(user);
  const inputTag = document.getElementById("input-search");
  inputTag.value = user;
};

const handleClickBtn = () => {
  // console.log("object");
  const inputValue = document.getElementById(`input-search`).value;

  createUser(inputValue);
};

const createUser = async (name) => {
  /* 
  call api: (post user)
  method is post
  url is http://localhost:3000/users/
  payload | body id {"name": "user"}
  {"name": "user"} is json string
  khi tạo bất kì thông tin mới thì không gửi id
  id là be tự động sinh ra
  */
  const body = JSON.stringify({
    name: name,
  });
  const response = await fetch(userEndpoint, {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(await response.JSON());
};

const updateUser = async (name) => {
  const body = JSON.stringify({
    name: name,
  });
  const response = await fetch(userEndpoint, {
    method: "PATCH",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
main();
