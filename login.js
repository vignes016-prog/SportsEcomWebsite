function login()
{
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

if(email === "")
{
    alert("enter your emailaddress")
    return false;
}
if(password === "")
{
    alert("enter your password")
    return false;
}
if(email==="vignesh@gmail.com" && password === "vignesh123")
{
    alert("login sucessfuly!")
    window.location.href="SportsStore.html"
    return false;
}

else{
    alert("invalid email and password")
    return false;
}
}

