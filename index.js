    //route
    function navigateToScreen(screenId){
        var screens = document.getElementsByClassName('screen');
        for(var i = 0; i < screens.length; i++){
            screens[i].style.display = "none";
        }

        var targetedScreen = document.getElementById(screenId);
        targetedScreen.style.display = "flex";
    }

    function passHashValue(){
        var hash = window.location.hash.substr(1);
        return hash? hash: 'statar-screen';
    }

    function handelScreenNavigation(){
        var screenId = passHashValue();
        navigateToScreen(screenId);
    }
    handelScreenNavigation();

    window.addEventListener('hashchange', function() {
        handelScreenNavigation();
    });



    // show messges

    for (let i = 0; i < 30; i++) {

        var ui = `

                <a href="#single-screen" class="item">
                <div class="left-section">
                    <div class="user-avater">
                    <img src="images/sarif.jpg" alt="#">
                    </div>
                    <div>
                        <h3>SARIF VAY ${i}</h3>
                        <p class="lastms">apnar practice koy?</p>
                    </div>
                </div>
                <div class="right-section">
                    <p class="time">5:07PM</p>
                    <div class="unread">5</div>
                </div>
                
            </a>

        `;

    document.querySelector('.main-content').innerHTML += ui;

        
    }
