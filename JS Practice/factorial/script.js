function test(){
var n =prompt("Enter the number to calculate its factorial");
var f =1;
if(n<1){
document.write("Invalid");
}
else{
while(n>1){
f = f*n;
n--;
}
document.write("The Factorial of "+n+ " is: " + f);
}
}