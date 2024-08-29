// xu li ngoai le
// exception

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "user 1",
          email: "user1@gmail.com",
          salary: 1000,
        },
        {
          id: 2,
          name: "user 2",
          email: "user2@gmail.com",
          salary: 4000,
        },
        {
          id: 3,
          name: "user 3",
          email: "user3@gmail.com",
          salary: 3000,
        },
      ];

      if (userId > 3) {
        reject(`User not found`);
      }

      const user = users.find(({ id }) => id === userId);
      resolve(user);
      //   console.log(user.salary);
    }, Math.random() * 2000);
  });
};

/* const main = async () => {
  try {
    // throw new Error("Invalid");
    const user = await getUser(5);
    console.log(user);
  } catch (error) {
    console.log(`error: ` + error);
  }
};

main();
 */

const getAdminUser = () => {
  return getUser(1);
};

const main2 = () => {
  const user = getAdminUser();
  const user2 = getAdminUser();
  const user3 = getAdminUser();
  Promise.all([user, user2, user3])
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
main2();
// Promise.all(main2).then((data) => {});
