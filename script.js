document.getElementById('bullet').addEventListener('load', function() {
	document.getElementById('bullet').classList.add("shoot");
});
var a = 0;
document.addEventListener('keydown', (e) => {
	a = parseInt(a);
	if(e.key == "ArrowUp"){
		e.preventDefault();
		a+= 50;
document.getElementById('soldier').style.transform = "translateZ("+ a +"px) perspective("+ (a * 2) +"px)";
		if(e.repeat){
		e.preventDefault();
			a += 50;
document.getElementById('soldier').style.transform = "translateZ("+ a +"px) perspective("+ (a * 2) +"px)";
		}
	}
	if(e.key == "ArrowDown"){
		e.preventDefault();
		a -= 50;
document.getElementById('soldier').style.transform = "translateZ("+ a +"px) perspective("+ (a * 2) +"px)";
		if(e.repeat){
				e.preventDefault();
		a -= 50;
document.getElementById('soldier').style.transform = "translateZ("+ a +"px) perspective("+ (a * 2) +"px)";
		}
	}
});
var ground = document.getElementById('ground');
var row1 = document.getElementById('row1');
if(ground){
	var newground;
	for(var i = 0; i< 100; i++){
		newground = ground.cloneNode();
		newground.style.transform = "translateX(" + (i*1000) + "px)";
		row1.appendChild(newground);
	}
	var newrow;
		for(var i = 0; i< 100; i++){
			newrow = row1.cloneNode();
			newrow.style.trandform = "translateZ(" + (i * 1000) + "px)";
			document.body.appendChild(newrow);
	}
}


