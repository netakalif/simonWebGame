var allDrums=document.querySelectorAll(".drum")
var allsoundsArray=[];
for(var i=0;i<allDrums.length;i++){
    allDrums[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",(event)=>{
    makesound(event.key);
    buttonAnimation(event.key);
});

document.querySelector(".play").addEventListener("click",function(){
    buttonAnimation("play");
    function playSoundWithDelay(index) {
        if (index >= allsoundsArray.length) {
          return;
        }
        allsoundsArray[index].play();
        setTimeout(function() {
          playSoundWithDelay(index + 1); 
        }, 500); 
      }
    
    playSoundWithDelay(0); 
})

document.querySelector(".startover").addEventListener("click",()=>{
    buttonAnimation("startover");
    allsoundsArray=[]} );

function makesound(x){
    switch (x) {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3")
            tom1.play();
            allsoundsArray.push(tom1);
            break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3")
            tom2.play();
            allsoundsArray.push(tom2);
            break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3")
            tom3.play();
            allsoundsArray.push(tom3);
            break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3")
            tom4.play();
            allsoundsArray.push(tom4);
            break;
        case "j":
            var crash=new Audio("./sounds/crash.mp3")
            crash.play();
            allsoundsArray.push(crash);
            break;
        case "k":
            var kick=new Audio("./sounds/kick-bass.mp3")
            kick.play();
            allsoundsArray.push(kick);
            break;
        case "l":
            var snare=new Audio("./sounds/snare.mp3")
            snare.play();
            allsoundsArray.push(snare);
            break;
        default:
            break;
    }
}

function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(()=>activeButton.classList.remove("pressed"),100);
}


