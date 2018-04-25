var mountains, trees;
var mouse;
var leftArrowPressed = false;
var rightArrowPressed = false;
var gameTimer;
const MOUSE_SPEED = 10;
const GRAVITY = 2;
var mouseFallSpeed = 0;
var inAir = true;
/*global $*/

function initializeGame(){
	mountains = document.getElementById('mountains');
	mountains.style.left='0px';
	mountains.style.top='0px';
	
	trees = document.getElementById('trees');
	trees.style.left='0px';
	trees.style.top='0px';
	
	mouse = document.getElementById('mouse');
	mouse.style.left = '340px';
	mouse.style.top = '0px';
	
	gameTimer = setInterval(gameloop, 50);
	
	var sndMusic = document.getElementById('sndMusic');
	sndMusic.volume = 0.1;
	sndMusic.loop = true;
	sndMusic.play();
}

function gameloop(){
	var mouseY = parseInt(mouse.style.top);
	if(mouseY < 250){
		mouseFallSpeed += GRAVITY;
		var newMouseY = mouseY + mouseFallSpeed;
		if(newMouseY > 250){
			newMouseY = 250;
		}
		mouse.style.top = newMouseY + 'px';
		
		if(newMouseY == 250){
			inAir = false;	
			document.getElementById('sndLand').play();
		}
	}
	
	var treesX = parseInt(trees.style.left);
	var mountainsX = parseInt(mountains.style.left);
	
	var mouse_src = mouse.src.split('/').pop();
	
	if(treesX == -2400){
		$(document).ready(function(){
			$('#gameWindow').hide();
			$('#egg').hide();
			$('#hint').hide();
			$('#text').hide();
			$('#end').show();
			$('#endBut').show();
		})
	}
	
	if(inAir){
		if(mouse.className == 'flip-H'){
			if(treesX < 0){
				trees.style.left = treesX + MOUSE_SPEED + 'px';
				mountains.style.left = mountainsX + MOUSE_SPEED/2 + 'px';
			}
		}else{
			if(treesX > -2400){
				trees.style.left = treesX - MOUSE_SPEED + 'px';
				mountains.style.left = mountainsX - MOUSE_SPEED/2 + 'px';
			}
		}
	}
	else{
		if(leftArrowPressed || rightArrowPressed){
			if(mouse_src != 'mouse_running.gif')
				mouse.src = 'images/mouse_running.gif';
		}else{
			mouse.src = 'images/mouse_standing.gif';
		}
		
		if(leftArrowPressed && treesX < 0){
			mouse.className = 'flip-H';
			trees.style.left = treesX + MOUSE_SPEED + 'px';
			mountains.style.left = mountainsX + MOUSE_SPEED/2 + 'px';
		}
		if(rightArrowPressed && treesX > -2400){
			mouse.className = '';
			trees.style.left = treesX - MOUSE_SPEED + 'px';
			mountains.style.left = mountainsX - MOUSE_SPEED/2 + 'px';
		}
	}
}

function jump(){
	document.getElementById('sndJump').play();
	inAir = true;
	mouse.src = 'images/mouse_jumping.gif';
	mouseFallSpeed = -30;
	var mouseY = parseInt(mouse.style.top);
	if(mouseY >= 250){
		mouse.style.top = '249px';
	}
}

$(document).ready(function(){
	$('#found').hover(function(){
		$('#found').text('egg? You found it!');
		$('#hint').hide();
	});
})


$(document).keydown(function(){
	if(event.keyCode==37)
		leftArrowPressed = true;
	if(event.keyCode==39)
		rightArrowPressed = true;
	if(event.keyCode==38 && !inAir)
		jump();
});

$(document).keyup(function(){
	if(event.keyCode==37)
		leftArrowPressed = false;
	if(event.keyCode==39)
		rightArrowPressed = false;
});

