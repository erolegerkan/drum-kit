var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",
        function(){
           var innerText = this.innerText;
           controlKey(innerText);
        }
    );
}
document.addEventListener("keydown",function(event){
    var key = event.key;
    controlKey(key);

});
function controlKey(innerText){
    switch(innerText){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            addAnimation(innerText);
            tom1.play();

            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            addAnimation(innerText);
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            addAnimation(innerText);
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            addAnimation(innerText);
            tom4.play();
            break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            addAnimation(innerText);
            snare.play();
            break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            addAnimation(innerText);
            crash.play();
            break;

        case "l":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            addAnimation(innerText);
            kickBass.play();
            break;
        
        default:
            alert("Something went wrong! \n Wrong key is pressed.");

   }
}
function addAnimation(innerText){
    var activeButton = document.querySelector("." + innerText);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

