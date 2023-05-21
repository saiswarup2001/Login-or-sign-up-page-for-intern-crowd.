function validate(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");

    if(username.value == "" || password.value == ""){
        alert("Please Enter Username and Password");
        return false;
    }else{
        return true;
    }
}