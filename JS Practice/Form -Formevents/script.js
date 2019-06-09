function test(){
var e = document.getElementById("email").value;
if(e==null || e==""){
alert("Enter Email Id");
return false;
}
var p =document.getElementById("pwd").value;
if(p==null || p==""){
alert("Enter Password");
return false;
}
}

function test2(){
alert("Focus");
}

function test3(){
alert("Blur");
}

function test4(){
alert("Change");
}