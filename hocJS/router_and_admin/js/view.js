async function renderUser() {
  // get user
  const users = await getUsers();

  // bind data to html
  let elementUsers = "";
  users.forEach((user) => {
    elementUsers += `
        <div class="item">
            <div class="item-info">
                <span>${user.id}</span>
                <span style="padding-left: 10px">${user.name}</span>
                <span style="padding-left: 10px">${user.email}</span>
            </div>
            <div class="item-action">
                <button onclick="onEditOrCreate('${user.id}')">edit</button>
                <button>del</button>
            </div>
        </div>
    `;
  });
  elementUsers += `<div></div>`;
  app.innerHTML = `<div class="list-item">${elementUsers}</div>`;
}

async function renderserForm(id = null) {
  const user = await getUser(id);
  //   console.log(user);
  let formHtml = `
        <form id="user-form">
            <input type="text" id="name" placeholder="name" value="${
              user.name
            }">
            <input type="text" id="email" placeholder="name" value="${
              user.email
            }">
            <input type="text" id="age" placeholder="name" value="${user.age}">
            <button class="add-btn" onclick="onSave(event, '${user.id}')">${
    id ? "Update" : "Add"
  }</button>
        </form>
    `;
  app.innerHTML = formHtml;
}
