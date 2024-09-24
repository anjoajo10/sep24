var user=document.getElementById("user");
var pwd=document.getElementById("pwd");
var btn=document.getElementById("btn");
var err1=document.getElementById("err1");
function validate(){
    if( user.value==""||pwd.value.trim()==""){
        alert("field cannot be empty");
        return false;
    } else if(pwd.value.length<5){
        //alert("password should contain more than 5 charchter")
        pwd.style.border="2px solid red";
        err1.textContent="password should greater than 5";
        return false;
    }
    else{
        pwd.style.border="2px solid green";
        err1.textContent=""
        return true;
    }
}