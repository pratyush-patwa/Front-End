function test(){
var n = prompt("Enter the number to get the fibonacci series");
var  first= 0;
var second =1;
var next ;
document.write("The fibonacci series upto " +n+ " terms: ");
for(var i = 0; i<n; i++){
	if(i<=1){
		next = i;
	}
	else{
		next = parseInt(first) + parseInt(second);
		first = second;
		second = next;
	}
	document.write(next + "  ");
	

}


}