let changeLogoSize = (state) => {
    switch(state){
        case 1:
            document.querySelector('#logo').setAttribute('position', 'small');
			oldState = 1;
			console.log('state: 1');
			break;
		case 0:
			document.querySelector('#logo').setAttribute('position', 'large')
			oldState = 0;
			console.log('state: 0');
			break;
		default:
			break;		
    };
};

window.onload = function (){
	window.addEventListener("scroll", function(){
		var changePoint = document.getElementById("MORE").offsetLeft,
		    windowWidth = document.documentElement.clientWidth,
			restorePoint = document.getElementById("HOME").offsetWidth;
		
		if (window.pageXOffset + (windowWidth-(windowWidth/20)) >= changePoint) {
			changeLogoSize(1)
		}else{
			changeLogoSize(0)
		}
	}, false);
	document.querySelector("#switcher-btn-left").addEventListener('click', ()=>{
		document.querySelector("#logger").setAttribute('state', 'reg');
		document.querySelector(".left-btn").setAttribute('active', 'true');
		document.querySelector(".right-btn").setAttribute('active', 'false');
		document.querySelector("#contact-submit").innerHTML = "Inscription";
	},false)
	document.querySelector("#switcher-btn-right").addEventListener('click', ()=>{
		document.querySelector("#logger").setAttribute('state', 'login');
		document.querySelector(".left-btn").setAttribute('active', 'false');
		document.querySelector(".right-btn").setAttribute('active', 'true');
		document.querySelector("#contact-submit").innerHTML = "Connection";
	})

	function transformScroll(event) {
		if (!event.deltaY) {
		  return;
		}
	  
		event.currentTarget.scrollLeft += (event.deltaY*5) + event.deltaX;
		event.preventDefault();
	}
	  
	var element = document.scrollingElement || document.documentElement;
	element.addEventListener('wheel', transformScroll);
}