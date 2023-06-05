
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var click=0;
var started=false;

function nextSequence(){
    level=level+1;
    userClickedPattern=[];
    $("#level-title").text("Level "+level);
    setTimeout(2000);
    var randomMove=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomMove];
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);

}


$(".btn").click(function () {

    var userChosenColor=$(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1)
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(()=> $("#"+currentColor).removeClass("pressed"),100);

}

$("h1").click(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        started=true;
        nextSequence();
    }
});

function checkAnswer(color){
        if(gamePattern[color]===userClickedPattern[color]){
            console.log("success");
            if(userClickedPattern.length===gamePattern.length){
                setTimeout(nextSequence,1000);
            }
        }
        else{
            console.log("fail");
            handleLoss();
        }
    
}

function handleLoss(){
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(()=> $("body").removeClass("game-over"),1500)
    $("#level-title").text("You Lost :(");
    gamePattern=[];
    userClickedPattern=[];
    level=0;
    setTimeout(() => {
        $("#level-title").text("Press Any Key To Start");
        started=false;
    }, 1500);
    
}