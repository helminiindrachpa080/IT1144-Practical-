document.getElementById("submitBtn")
.addEventListener("click",function(){
	
	this.style.backgroundColor = "green";
	this.innerHTML="submitted";
	
	alert("Successfully Submitted!");
});