function changeImage(){
			element = document.getElementById('myimage')  
			if (element.src.match("dark")) {  
  			 element.src = "img/lz.png";  
 			 }  
			// else{  
  	// 		 element.src="img/dark.png";   
  	// 		}  
		}

function changeImg(){
	element = document.getElementById('myimg');
	if (element.src.match("candle.png")) {
		element.src = "img/candle1.png";
	}
	else{
		element.src = "img/candle.png";
	}
}
