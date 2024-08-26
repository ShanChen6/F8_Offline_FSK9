/* const learning = (callback) => {
  setTimeout(() => {
    console.log("learning");
    callback();
  }, 500);
};

const finishLearning = (callback) => {
  setTimeout(() => {
    console.log("finish learning");
    callback();
  }, 200);
};

const working = (callback) => {
  setTimeout(() => {
    console.log("working");
    callback();
  }, 100);
};

const takeSalary = () => {
  setTimeout(() => {
    console.log("take salary");
  }, 100);
};

// learning();
// finishLearning();
// working();

learning(() => {
  finishLearning(() => {
    working(() => {
      takeSalary();
    });
  });
});
 */

// const learning = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello world");
//     });
//   }, 2000);
// };

// learning()
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("done process");
//   });

const learning = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    });
  }, 2000);
};

const main = async () => {
  const result = await learning();
  console.log(result);
  console.log("ok");
};

main();
