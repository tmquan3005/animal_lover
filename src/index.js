import firebase from "firebase"
import {mxFirebase} from './mx';
import './mx.css';
import './index.css';
import riot from 'riot';
import "./tags/signin.tag";
import "./tags/signup.tag";
import route from 'riot-route';
import "./tags/upload.tag";
import "./tags/home.tag";


var firebaseConfig = {
    apiKey: "AIzaSyAYAc2vcChoJWS13Km1ZW8vUpXRkt0-Brk",
    authDomain: "pet-lover-968a6.firebaseapp.com",
    databaseURL: "https://pet-lover-968a6.firebaseio.com",
    projectId: "pet-lover-968a6",
    storageBucket: "pet-lover-968a6.appspot.com",
    messagingSenderId: "1004596768709",
    appId: "1:1004596768709:web:40d29e13973167f5"
  };


mxFirebase.init(firebaseConfig);



document.getElementById("logo").addEventListener('click',() => {
    window.location.href = ""
})

document.getElementById("pet").addEventListener('click',() => {
    window.location.href = "/pet"
})

document.getElementById("insects").addEventListener('click',() => {
    window.location.href = "/insect"
})

document.getElementById("Wild").addEventListener('click',() => {
    window.location.href = "/wild-animal"
})

document.getElementById("animals-art").addEventListener('click',() => {
    window.location.href = "/animal-art"
})

document.getElementById("login").addEventListener('click',() => {
    window.location.href = "/signin"
})

document.getElementById("signup").addEventListener('click',() => {
    window.location.href = "/signup"
})

firebase.auth().onAuthStateChanged(async ()=>{
    let user = await firebase.auth().currentUser
    let loginDiv = document.getElementById ("login-div");
    let signUpDiv = document.getElementById ("signup-div");
    let upload = document.getElementById("upload-div");
    if (user) {
        loginDiv.style.display = "none";
        signUpDiv.style.display = "none";
        upload.style.display = "flex";
        // let nav = document.getElementById("nav")
        // let div = document.createElement("div")
        // let img = document.createElement("img")
        // img.src = "./assets/upload.png"
        // div.setAttribute("id","upload")
        // div.appendChild(img)
        // nav.appendChild(div)
        console.log("upload ready")
    } else {
        loginDiv.style.display = "flex";
        signUpDiv.style.display = "flex";
        upload.style.display = "none";
    }
})

document.getElementById("upload").addEventListener('click',() => {
    window.location.href = "/upload"
})

function loadPhoto(data){
    let img_box = document.getElementById("image-box")
    for(let i=0;i < data.length;i ++){
        //tao 1 cai div chua anh
        //them no vao image-box
        let div = document.createElement("div")
        div.classList.add("home-image-div")
        let img = document.createElement("img");
        img.src = data[i].url;
        img.classList.add("home-img")
        div.appendChild(img)
        img_box.appendChild(div)
    }
}

route.base("/")
route("/signin", () => {
        const signin = riot.mount("div#root", "signin");
        document.getElementById("sign-in-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("submited")
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
            await mxFirebase.signIn(email, password);
            console.log("login sucess");
        } catch(err) {
            document.getElementById("error-message").innerText = err.message;
        }
    });
})

route("/signup",() => {
    const signup = riot.mount("div#root","signup");
    document.getElementById("sign-up-form").addEventListener("submit", async (e) => {
        e.preventDefault();
        console.log("submited")
        const email = document.getElementById("email").value
        const name = document.getElementById("name").value
        const pass = document.getElementById("password").value
        const pass_cnf = document.getElementById("password-cnf").value
        console.log(email,pass)
        if (pass == pass_cnf){
            try{
                await mxFirebase.signUp(email,pass)
                firebase.auth().onAuthStateChanged(async ()=>{
                    let id = firebase.auth().currentUser.uid
                    await firebase.firestore().doc(`users/${id}`).set({
                        email: email,
                        username: name,
                        saved_img:[]
                    })
                    
                })
            }
            catch(err){
                document.getElementById("error-message").textContent = err.message
            }
        }
        else {
            document.getElementById("error-message").textContent = "Password and password confirm are not match"
        }
    });
});


route("/upload",()=>{
    const upload = riot.mount("div#root", "upload");
    document.getElementById("upload-form").addEventListener("submit",async (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const file = document.getElementById("image").files;
        let url = await mxFirebase.putFiles(file)
        const category = document.getElementById("category").value;
        const caption = document.getElementById("caption").value;
        // console.log(url)
        try{
            let id = await mxFirebase.collection('photos').create({
                title: title,
                caption: caption,
                category: category,
                url: url,
                comment: [],
                like: 0
            })
            window.location.href = "/"
        }
        catch(err){
            console.log(err)
        }
    })
})
route('/', async () => {
    riot.mount("#root","home")
    const photos = await mxFirebase.collection('photos').getAll();
    const opts = {
        photos: photos
    }
    console.log(photos)
    loadPhoto(photos)    
});

route("/pet",async ()=>{
    riot.mount("#root", "home")
    const filter = {
        category: 'Pet'
    }
    const photos = await mxFirebase.collection('photos').paginate(1,1000, filter);
    console.log(photos.data)
    loadPhoto(photos.data)
});

route("/animal-art",async ()=>{
    riot.mount("#root", "home")
    const filter = {
        category: 'Animal Art'
    }
    const photos = await mxFirebase.collection('photos').paginate(1,1000, filter);
    console.log(photos.data)
    loadPhoto(photos.data)
});

route("/insect",async ()=>{
    riot.mount("#root", "home")
    const filter = {
        category: 'Insect'
    }
    const photos = await mxFirebase.collection('photos').paginate(1,1000, filter);
    console.log(photos.data)
    loadPhoto(photos.data)
});

route("/wild-animal",async ()=>{
    riot.mount("#root", "home")
    const filter = {
        category: 'Wild Animal'
    }
    const photos = await mxFirebase.collection('photos').paginate(1,1000, filter);
    console.log(photos.data)
    loadPhoto(photos.data)
});

route.start(true)