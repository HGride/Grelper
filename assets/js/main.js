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