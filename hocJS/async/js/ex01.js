const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "user 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "user 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "user 3",
          salary: 3000,
        },
      ];
      const user = users.find(({ id }) => id === userId);
      resolve(user);
      //   console.log(user.salary);
    }, Math.random() * 2000);
  });
};

// getUser(1);
const ids = [1, 2, 3];

// const getTotal = () => {
//   return new Promise((resolve, reject) => {});
// };

let total = 0;
let count = 0;

const result = new Promise((resolve) => {
  ids.forEach((id) => {
    getUser(id).then((user) => {
      // console.log(user.salary);
      total += user.salary;
      count++;
      //   console.log(count);
      if (count === ids.length) {
        resolve(total);
      }
    });
  });
});

result.then((data) => console.log(data));
