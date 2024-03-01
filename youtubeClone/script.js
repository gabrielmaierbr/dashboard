var dark = false;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("content").classList.add("content-open");
    document.getElementById("video-grid").classList.add("video-grid-open");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("content").classList.remove("content-open");
    document.getElementById("video-grid").classList.remove("video-grid-open");
}
function search() {
    
    var searchTerm = document.querySelector(".search-box-input").value; 
  
    window.location.href = "https://www.youtube.com/results?search_query=" + encodeURIComponent(searchTerm);

    return false;
}
function DarkMode(){

    var content = document.getElementsByClassName("content")[0]; 
    var header = document.getElementsByClassName("header")[0];
    var logo = document.getElementById("header-pic");
    var close_button = document.getElementById("closebtn");
    var theme_title = document.getElementById("theme-title");
    var dot = document.getElementById("dot-pic");
    var lateral_icon = document.getElementById("lateral-nav-bar-icon");
    var query = document.getElementById("query");
    var search_bt = document.getElementById("search-bt");
    var btimg = document.getElementById("bt-img");
    var mySidenav = document.getElementById("mySidenav");
    var nav_bar_op = document.getElementsByClassName("nav-bar-op");
    var start = document.getElementsByClassName("start")[0]; 
    var explore = document.getElementsByClassName("explore")[0]; 
    var subscribe = document.getElementsByClassName("subscribe")[0]; 
    var shorts = document.getElementsByClassName("shorts")[0]; 
    var video_name = document.getElementsByClassName("video-name");

    theme_title.style.color = "white";
    close_button.style.color = "red";
    mySidenav.style.backgroundColor = "#0f0f0f";
    btimg.src = "imagens/magniffying-dark.png";
    for (var i = 0; i < nav_bar_op.length; i++) {
        nav_bar_op[i].style.color = "white";
    }
    for(var i = 0;i < video_name.length;i++){
        video_name[i].style.color = "white";
    }
    navMenu.style.backgroundColor = "#0f0f0f";
    dot.src = "imagens/dot-dark.png";
    start.src = "imagens/home-dark.png";
    explore.src = "imagens/explore-dark.png";
    subscribe.src = "imagens/sub-dark.png";
    shorts.src = "imagens/clock-dark.png";
    search_bt.style.transition = "none";
    search_bt.style.backgroundColor = "#222222";
    query.style.backgroundColor = "#121212";
    query.style.color = "white";
    lateral_icon.style.color = "white";
    logo.src = "imagens/youtube-logo-dark.png";
    content.style.backgroundColor = "#0f0f0f";
    header.style.backgroundColor = "#0f0f0f";
    document.body.style.backgroundColor = "#0f0f0f";
}
function LightMode() {
    var content = document.getElementsByClassName("content")[0];
    var header = document.getElementsByClassName("header")[0];
    var logo = document.getElementById("header-pic");
    var theme_title = document.getElementById("theme-title");
    var lateral_icon = document.getElementById("lateral-nav-bar-icon");
    var query = document.getElementById("query");
    var dot = document.getElementById("dot-pic");
    var search_bt = document.getElementById("search-bt");
    var btimg = document.getElementById("bt-img");
    var mySidenav = document.getElementById("mySidenav");
    var nav_bar_op = document.getElementsByClassName("nav-bar-op");
    var start = document.getElementsByClassName("start")[0];
    var explore = document.getElementsByClassName("explore")[0];
    var subscribe = document.getElementsByClassName("subscribe")[0];
    var shorts = document.getElementsByClassName("shorts")[0];
    var video_name = document.getElementsByClassName("video-name");

    theme_title.style.color = "";
    navMenu.style.backgroundColor = "";
    dot.src = "imagens/dots.png";
    mySidenav.style.backgroundColor = "";
    btimg.src = "imagens/magnifying-glass.png";
    for (var i = 0; i < nav_bar_op.length; i++) {
        nav_bar_op[i].style.color = "";
    }
    for (var i = 0; i < video_name.length; i++) {
        video_name[i].style.color = "";
    }
    start.src = "imagens/home.png";
    explore.src = "imagens/direction.png";
    subscribe.src = "imagens/subscribe.png";
    shorts.src = "imagens/clock.png";
    search_bt.style.transition = "";
    search_bt.style.backgroundColor = "";
    query.style.backgroundColor = "";
    query.style.color = "";
    lateral_icon.style.color = "";
    logo.src = "imagens/youtube-logo-light.png";
    content.style.backgroundColor = "";
    header.style.backgroundColor = "";
    document.body.style.backgroundColor = "";
}

function abrirLink(link){

    switch(link){
        case 1:
            window.open('https://www.youtube.com/watch?v=xD5No_JRrZw', '_self');
        break;
        case 2:
            window.open('https://www.youtube.com/watch?v=Jb1cOIk3sDw', '_self');
        break;
        case 3:
            window.open('https://www.youtube.com/watch?v=vx2u5uUu3DE', '_self');
        break;
        case 4:
            window.open('https://www.youtube.com/watch?v=lDK9QqIzhwk', '_self');
        break;
        case 5:
            window.open('https://www.youtube.com/watch?v=8SbUC-UaAxE', '_self');
        break;
        case 6:
            window.open('https://www.youtube.com/watch?v=1w7OgIMMRc4', '_self');
        break;
        case 7:
            window.open('https://www.youtube.com/watch?v=Rbm6GXllBiw', '_self');
        break;
        case 8:
            window.open('https://www.youtube.com/watch?v=o1tj2zJ2Wvg', '_self');
        break;
        
    }
        
}

var dotPic = document.getElementById("dot-pic");
var navMenu = document.getElementById("nav-menu");
var light_bt = document.getElementById("light");
var dark_bt = document.getElementById("dark");
dotPic.addEventListener("click", function() {
    navMenu.style.display = "flex";
});

document.addEventListener("click", function(event) {
    if (event.target != navMenu && event.target != dotPic && event.target != light_bt && event.target != dark_bt) {
        navMenu.style.display = "none";
    }
});
