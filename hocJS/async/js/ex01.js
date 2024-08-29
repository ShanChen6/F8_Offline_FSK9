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
      const user = users.find(({ id }) => id === userId);
      resolve(user);
      //   console.log(user.salary);
    }, Math.random() * 2000);
  });
};

// getUser(1);
const ids = [1, 2, 3];
let total = 0;

const promises = ids.map((id) => {
  return getUser(id);
});

let maxSalary = 0;

Promise.all(promises).then((data) => {
  data.forEach((e) => {
    if (maxSalary < e.salary) {
      return (maxSalary = e.salary);
    }
    console.log(maxSalary);
    const userWithMaxSalary = data.find((user) => user.salary === maxSalary);
    console.log(userWithMaxSalary.email);
  });
});

// Promise.all(promises).then((data) => {
//   data.forEach((e) => {
//     total += e.salary;
//   });
//   console.log(total);
// });

// const getTotalSalary = () => {
//   let total = 0;
//   let count = 0;

//   ids.forEach(async (id) => {
//     const user = await getUser(id);
//     console.log(user);
//     total += user.salary;
//     count++;
//     if (count === ids.length) {
//       return total;
//     }
//   });
// };

// console.log(`total salary: ${total}`);

// const getTotal = () => {
//   return new Promise((resolve, reject) => {});
// };

/* let total = 0;
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

result.then((data) => console.log(data)); */
