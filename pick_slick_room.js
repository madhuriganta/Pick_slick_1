const firebaseConfig = {
    apiKey: "AIzaSyCSreb6VslsuMpOyzpEAEqiY1mO1rwCyPs",
    authDomain: "pick-slick.firebaseapp.com",
    databaseURL: "https://pick-slick-default-rtdb.firebaseio.com",
    projectId: "pick-slick",
    storageBucket: "pick-slick.appspot.com",
    messagingSenderId: "961669727544",
    appId: "1:961669727544:web:5c91744205681422b1edcd",
    measurementId: "G-SYSRYQWYEY"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
