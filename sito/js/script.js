// cursor/outline

	// function
let cursor = document.querySelector('.cursor');
let outline = document.querySelector('.outline');
let aa = document.querySelectorAll('.aa');
let tt = document.querySelectorAll('.tt');
let pp = document.querySelectorAll('.pp');
let bb = document.querySelectorAll('.bb');
let ff = document.querySelectorAll('.ff');
let cc = document.querySelectorAll('.cc');
let ii = document.querySelectorAll('.ii');
let mm = document.querySelectorAll('.mm');
let img = document.querySelectorAll('.img');


// Show Password
function myFunction() {
	var x = document.getElementById("myInput");
	if (x.type === "password") {
	  x.type = "text";
	} else {
	  x.type = "password";
	}
}

document.addEventListener('mousemove', function(e){

	let x = e.clientX
	let y = e.clientY

	outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`
	cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%) )`

});

aa.forEach((link) => {
  link.addEventListener("mouseover", function() {
	outline.classList.add('aa');
		cursor.classList.add('aa');
a
  });
  link.addEventListener("mouseleave", function() {
	  outline.classList.remove('aa');
		cursor.classList.remove('aa');
  
	});
});

tt.forEach((link) => {
  link.addEventListener("mouseover", function() {
	outline.classList.add('tt');
		cursor.classList.add('tt');

  });
  link.addEventListener("mouseleave", function() {
	  outline.classList.remove('tt');
		cursor.classList.remove('tt');
  
	});
});

pp.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('pp');
		  cursor.classList.add('pp');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('pp');
			cursor.classList.remove('pp');
	
	  });
  });

  bb.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('bb');
		  cursor.classList.add('bb');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('bb');
			cursor.classList.remove('bb');
	
	  });
  });

  ff.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('ff');
		  cursor.classList.add('ff');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('ff');
			cursor.classList.remove('ff');
	
	  });
  });
  
  cc.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('cc');
		  cursor.classList.add('cc');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('cc');
			cursor.classList.remove('cc');
	
	  });
  });

  ii.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('ii');
		  cursor.classList.add('ii');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('ii');
			cursor.classList.remove('ii');
	
	  });
  });

  mm.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('mm');
		  cursor.classList.add('mm');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('mm');
			cursor.classList.remove('mm');
	
	  });
  });

  img.forEach((link) => {
	link.addEventListener("mouseover", function() {
	  outline.classList.add('img');
		  cursor.classList.add('img');
  
	});
	link.addEventListener("mouseleave", function() {
		outline.classList.remove('img');
			cursor.classList.remove('img');
	
	  });
  });

