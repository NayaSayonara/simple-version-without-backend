var counter = 0; 
function handleClick() {
	counter+=1;
	if(counter >=10){
		location.replace("http://localhost:8080/dashboard")
	}
	
};



