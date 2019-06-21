// import {mxFirebase} from './mx';
// import './mx.css';
// import './index.css';



// var firebaseConfig = {
//     apiKey: "AIzaSyBLg1JzDcFwnF7e1PMGbgVW0ikqgXY3yw0",
//     authDomain: "an-camp.firebaseapp.com",
//     databaseURL: "https://an-camp.firebaseio.com",
//     projectId: "an-camp",
//     storageBucket: "an-camp.appspot.com",
//     messagingSenderId: "523389688134",
//     appId: "1:523389688134:web:1c752a2dbdae9a2c"
// };


// mxFirebase.init(firebaseConfig);


// document.getElementById("sign-in-form").addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     try {
//         await mxFirebase.signIn(email, password);
//         console.log("login sucess");
//     } catch(err) {
//     document.getElementById("error-message").innerText = err.message;
//     }

// })

// // // `import riot from 'riot';


// // // import "./tags/homepage.tag";
// // // import "./tags/signin.tag";

// // // const homePage = riot.mount("div#root", "homepage")

// // // import {mxFirebase} from './mx';
// // // import './tags/mx.css';
// // // import './tags/index.css';
// // // import './tags/homepage.tag';
// // // import riot from 'riot';
// // // import { runInContext } from 'vm';
// // // import "./tags/upload.tag";



// // // var firebaseConfig = {
// // //     apiKey: "AIzaSyBLg1JzDcFwnF7e1PMGbgVW0ikqgXY3yw0",
// // //     authDomain: "an-camp.firebaseapp.com",
// // //     databaseURL: "https://an-camp.firebaseio.com",
// // //     projectId: "an-camp",
// // //     storageBucket: "an-camp.appspot.com",
// // //     messagingSenderId: "523389688134",
// // //     appId: "1:523389688134:web:1c752a2dbdae9a2c"
// // // };


// // // mxFirebase.init(firebaseConfig);

// // // document.getElementById("sign-in-form").addEventListener("submit", async (e) => {
// // //     e.preventDefault();
// // //     const email = document.getElementById("email").value;
// // //     const password = document.getElementById("password").value;
// // //     try {
// // //         await mxFirebase.signIn(email, password);
// // //         console.log("login sucess");
// // //     } catch(err) {
// // //     document.getElementById("error-message").innerText = err.m

// // //     }
// // // });

// // // route('/home', async () => {
// // //         const products = await nxFirebase.collection('products').getAll;
// // //         console.log(products);
// // //         const opts = {
// // //             products: products
// // //         }
// // //         const homepage = riot.mount('root', 'homepage', opts);
// // // });

// // // route.start(true)

import {mxFirebase} from './mx';
import './mx.css';
import './index.css';

var firebaseConfig = {
    apiKey: "AIzaSyBLg1JzDcFwnF7e1PMGbgVW0ikqgXY3yw0",
    authDomain: "an-camp.firebaseapp.com",
    databaseURL: "https://an-camp.firebaseio.com",
    projectId: "an-camp",
    storageBucket: "an-camp.appspot.com",
    messagingSenderId: "523389688134",
    appId: "1:523389688134:web:1c752a2dbdae9a2c"
};


mxFirebase.init(firebaseConfig);


document.getElementById("sign-up-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    try {
        await mxFirebase.signUp(email, password);
        console.log("login sucess");
    } catch(err) {
    document.getElementById("error-message").innerText = err.message;
    }
})

