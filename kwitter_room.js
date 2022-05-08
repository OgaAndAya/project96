
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyACE4RtatusZniTgvgvd_QIJ3wv3epgsnU",
      authDomain: "kwitter1-2cfec.firebaseapp.com",
      databaseURL: "https://kwitter1-2cfec-default-rtdb.firebaseio.com",
      projectId: "kwitter1-2cfec",
      storageBucket: "kwitter1-2cfec.appspot.com",
      messagingSenderId: "1059698885013",
      appId: "1:1059698885013:web:4d864c92a28042b54ef69c"
    };
    firebase.initializeApp(firebaseConfig);
    
   user_name= localStorage.getItem("user_name"); 
   document.getElementById("user_name").innerHTML= "welcome "+ user_name + "!";
   
   function addRoom(){
         room_name= document.getElementById("room_name").value;
         firebase.database().ref("/").child(user_name).update({
            purpose : "adding room_name"
   });
   localStorage.setItem("room_name",room_name);
   window.location= "kwitter_page.html";
}

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname -", room_name);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML= "row";

      
      });
});
}
getData();

function redirectToRoomName(name){
      console.log(name);
      localstorgae.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "kwitter.html";
}