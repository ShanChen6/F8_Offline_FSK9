const userEndpoint = "http://localhost:3000/users";
const postEndpoint = "http://localhost:3000/posts";
const commentEndpoint = "http://localhost:3000/comments";

const getUser = () => {
  return fetch(userEndpoint);
};

const getPost = () => {
  return fetch(postEndpoint);
};

const getComment = () => {
  return fetch(commentEndpoint);
};

const main = async () => {
  Promise.all([getUser(), getPost(), getComment()]).then((data) => {
    console.log(data);
  });
  //   try {
  //     const response = await fetch(userEndpoint);
  //     console.log(await response.json());
  //   } catch (error) {
  //     console.log(`error: ` + error);
  //   }
};
main();
