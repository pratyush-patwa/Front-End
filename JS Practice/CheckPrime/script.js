function test(){
var i =2;
var n = prompt("Enter the number to check if it is PRIME or Not");
if(n<i){
	document.write("The number entered is Invalid or below 2");
}

else{
	while(n>i){
		if(n%i==0){
		document.write("No is not Prime");
		break;
		}
		else if(n%i!=0)
		{
		document.write("No is Prime");
		break;
		}
		i++;
	}
		

}

}