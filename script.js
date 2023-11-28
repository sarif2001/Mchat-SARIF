function navigateToScreen(screenId){
    var screens = document.getElementsByClassName('screen');
    
    for(var i = 0; i < screens.length; i++){
        screens[i].style.display = "none"

    }

    var targetedScreen = document.getElementById(screenId);
    targetedScreen.style.display = "flex"
}


function passHashValue(){
    var hash = window.location.hash.substr(1);
    return hash? hash:'stater-screen'
}

function handelScreenNavigation(){
    var screenId = passHashValue();
    navigateToScreen = screenId;
}

    handelScreenNavigation();

window.addEventListener('hashchange', function(){
    handelScreenNavigation();
});

