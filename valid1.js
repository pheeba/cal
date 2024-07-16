function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "nidhi" && password == "2023"){
window.location = "index11.html"; 
return false;
}
else{
alert("please enter correctly");
}
}
