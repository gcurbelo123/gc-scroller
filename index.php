<!doctype html>
<html>
	<head>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<title>Parallax</title>
		 <link rel="stylesheet" type="text/css" href="parallax.css">
		<script language="javascript" type="text/javascript" src="engine.js"></script>
	</head>
	<body onload=initializeGame()>
		<div id = "text"><strong>Mouse Scroller</strong></div>
		<div id="gameWindow">
			<img id="sky" src="images/sky.png">
			<img id="mountains" src="images/mountains.png">
			<img id="trees" src="images/trees.png">
			<img id="mouse" src="images/mouse_standing.gif">
		</div>
		<div id = "egg"><strong>Can you find the hidden <span id = 'found'>egg?</span></strong></div>
		<div id = "hint">Hint: It might not be in the game</div>
		<div id = "end"><strong>You reached the end!</strong></div>
		<form id = 'endBut'>
		    <input type = 'submit' value = 'Again!'>
		</form>
		<audio id = "sndMusic" preload = "auto">
			<source src = "sound/BigPoppa.mp3">
			<source src = "sound/BigPoppa.wav">
		</audio>
		<audio id = "sndJump" preload = "auto">
			<source src = "sound/jump.mp3">
			<source src = "sound/jump.wav">
		</audio>
		<audio id = "sndLand" preload = "auto">
			<source src = "sound/land.mp3">
			<source src = "sound/land.wav">
		</audio>
		
		<!--<iframe style = "display: none" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/257690415&color=%23ff5500&amp;auto_play-->
		<!--=true&amp;hide_related=true&amp;visual=false"></iframe>-->
	</body>
</html>