// let users = [];

const getUsers = async () => {
  const users = await getMethod("user");
  return users;
};

const onEditOrCreate = (id = null) => {
  console.log("onEditOrCreate", id);
  router.navigate(`/user/${id ? id : "0"}`);
};

const getUser = async (id) => {
  return await getMethod(`user/${id}`);
};

const onSave = async (event, id = null) => {
  event.preventDefault();
  //   console.log("object");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  const body = {
    name,
    email,
    age,
  };
  //   console.log(id, body);

  let newUser = null;
  if (id) {
    newUser = await putMethod(`user/${id}`, body);
  } else {
    newUser = await postMethod(`user`, body);
  }
  router.navigate("/");
};
