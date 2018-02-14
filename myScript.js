
window.onscroll = function() {myFunction()};

function myFunction()
{
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
	{
		document.getElementById('navbar').className = 'black';
	}
	else
	{
		document.getElementById('navbar').className = '';
	}
}

function pbass() 
{
	var bass = new Audio();
	bass.src = "audio/BE.mp3";
	bass.play();
}
function pcym() 
{
	var cym = new Audio();
	cym.src = "audio/CE.mp3";
		cym.play();
}
function psnare() 
{
	var snare = new Audio();
	snare.src = "audio/KA.mp3";
	snare.play();
}
function psym() 
{
	var sym = new Audio();
	sym.src = "audio/PS.mp3";
	sym.play();
}
function pf() 
{
	var pf = new Audio();
	pf.src = "audio/PF.mp3";
	pf.play();
}
function prim() 
{
	var rim = new Audio();
	rim.src = "audio/RIM.mp3";
	rim.play();
}

function playpause(play1,vid)
{
	var vid = document.getElementById(vid);
if(vid.paused)
{
	vid.play();
	document.getElementById('play1').src="foto/pause.png"
}
else
{
	vid.pause();
	document.getElementById('play1').src="foto/play.png"
}
}

function soundmute(sound1,vid)
{
	var vid = document.getElementById(vid);
if(vid.muted)
	{
		vid.muted = false;
		document.getElementById('sound1').src="foto/mute3.png"
	}
else
	{
		vid.muted = true;
		document.getElementById('sound1').src="foto/sound1.png"
	}
}


function playsound(event) 
{
    var x = event.keyCode || event.which;
    if (x == 49) 
    {
        pbass();
    }
    else if (x == 50 )
	{
		pcym();
	}
	else if (x == 51 )
	{
		psnare();
	}
	else if (x == 52 )
	{
		psym();
	}
	else if (x == 53 )
	{
		pf();
	}
	else if (x == 54 )
	{
		prim();
	}
}