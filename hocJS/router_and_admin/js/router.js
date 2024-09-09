// import Navigo from 'navigo';
const router = new Navigo("/");

const app = document.getElementById("app");

router.on({
  "/": () => {
    // app.innerHTML = "Welcome Home Page";
    // console.log("Home Page");
    renderUser();
  },
  "/user/:id": ({ data }) => {
    const { id } = data;
    renderserForm(id);
  },
  "/about": () => {
    app.innerHTML = "About Us Page";
    console.log("About Page");
  },
});
