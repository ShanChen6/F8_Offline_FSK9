// import
// import home, { b as b1, c as c1 } from "../modules/home.js";
// import * as home from "../modules/home.js";

// console.log(home);
// console.log(b1, c1);
// const { default: a, b, c } = home;
// console.log(a, b, c);

// import * as home from "../modules/home.js";
// import * as products from "../modules/products.js";
// import * as posts from "../modules/posts.js";

import { home, products, posts } from "../modules/index.js";

home();
products();
posts();

// console.log(home);
// console.log(products);
// console.log(posts);
