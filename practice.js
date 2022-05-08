
//ADD YOUR FIREBASE LINK
const firebaseConfig = {
    apiKey: "AIzaSyACE4RtatusZniTgvgvd_QIJ3wv3epgsnU",
    authDomain: "kwitter1-2cfec.firebaseapp.com",
    databaseURL: "https://kwitter1-2cfec-default-rtdb.firebaseio.com",
    projectId: "kwitter1-2cfec",
    storageBucket: "kwitter1-2cfec.appspot.com",
    messagingSenderId: "1059698885013",
    appId: "1:1059698885013:web:4d864c92a28042b54ef69c"
  };

function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
         purpose : "adding user"
         });
         
}