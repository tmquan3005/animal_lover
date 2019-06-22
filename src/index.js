import firebase from "firebase"
import {mxFirebase} from './mx';
import './mx.css';
import './index.css';
import riot from 'riot';
import "./tags/signin.tag";
import "./tags/signup.tag";
import route from 'riot-route';


var firebaseConfig = {
    apiKey: "AIzaSyAYAc2vcChoJWS13Km1ZW8vUpXRkt0-Brk",
    authDomain: "pet-lover-968a6.firebaseapp.com",
    databaseURL: "https://pet-lover-968a6.firebaseio.com",
    projectId: "pet-lover-968a6",
    storageBucket: "",
    messagingSenderId: "1004596768709",
    appId: "1:1004596768709:web:40d29e13973167f5"
  };


mxFirebase.init(firebaseConfig);

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
                firebase.auth().onAuthStateChanged(()=>{
                    console.log(firebase.auth().currentUser.uid)
                })
            }
            catch(err){
                document.getElementById("error-message").textContent = err.message
            }
        }
        else {
            document.getElementById("error-message").textContent = "Password and password confirm are not match"
        }
    })
    
})

route.start(true)