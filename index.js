// Bagian Loader
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 800);
// Top Navigation Bar
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
// Musik
    var xenonOST = document.getElementById("xenonOST");
    var music = document.getElementById("music");
    music.onclick = function(){
        if(xenonOST.paused){
            xenonOST.play();
            music.src = "./assets/musiclogo_on.png";
        }else{
            xenonOST.pause();
            music.src = "./assets/musiclogo_off.png";
        }
    }
// Tombol Read More
    var titik = document.getElementById("titik");
    var moreText = document.getElementById("readMore");
    var tombolText = document.getElementById("btnReadmore");

    if (titik.style.display === "inline") {
        titik.style.display = "none";
        tombolText.innerHTML = "Read less";
        moreText.style.display = "inline";
    } else {
        titik.style.display = "inline";
        tombolText.innerHTML = "Read more";
        moreText.style.display = "none"; 
    }
}

// Animasi Loading
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("displayloading").style.display = "block";
}

// PAGE FUTURE
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }