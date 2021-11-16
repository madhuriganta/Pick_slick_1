function addUser() {
    user_name = document.getElementById("user_name").value;
    password = document.getElementById("pwd").value;

    localStorage.setItem("user_name" , user_name);
    localStorage.setItem("password" , password);

    window.location = "pick_slick_room.html";
   
}