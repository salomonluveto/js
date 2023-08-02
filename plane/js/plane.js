
$(document).ready(function() {
	 
	var haut = $(window).height();
	var largeur = $(window).width();
	
	$('#body').css({'height':haut+'px', 'width':largeur+'px'});
	var t = 0
	$('body').on('click', '.plane', function() {
        
		t = t+1
		let contenu = document.querySelector('#conten')
		contenu.textContent = 'Score '+(t)
		var pos = $(this).offset();
		var newTop = pos.top - 50;
		var newLeft = pos.left - 20;
		
		$(this).attr('src', 'images/explosion.gif').css({'top':newTop+'px', 'left':newLeft+'px', 'width':'140px'});
		//console.log(this)
		setTimeout(destroyImg, 2000, this)
		//closeIm(this);
		//$(this).delay(2000).attr('src', '');
	});
	
 
	function destroyImg(im)
	{
		//alert(im)
		im.remove();
		
	}
var b =	setInterval(function() {
		var aleatoire = Math.random()*haut
		//$('#body').after('<img src="images/plane.png" style="top:'+aleatoire+'px;right:0px;" class="plane fixed" />');
		var plane = $('<img src="images/plane.gif" style="top:'+aleatoire+'px;left:'+largeur+'px;" class="plane fixed" />').animate({left:'-200px'}, 8000)
		//alert(aleatoire);
		$('#body').after(plane);
		setTimeout(destroyImg, 9000, plane)
	}, 1000)
	setTimeout(() => clearInterval(b), 30000);

	let timer = setInterval(() => {
		let date = new Date(2023,6,14,17,1,23,70)
		let contenu = document.querySelector('#content')
		contenu.textContent = 'Il vous reste moins d\'une minute '+(date.getMinutes())
	}, 1000);
	setTimeout(()=>clearInterval(timer),60000)
});