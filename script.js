function paper(){
    let ai;
    let num=Math.random();
    num=num*100;
    if (num>=0 && num<=33){
        ai=="paper";
    }
    if(num>33 && num<=66){
        ai="rock";
    }
    if(num>66){
        ai="scissor";
    }
    
    if(ai=="paper"){
        document.getElementById('computer').innerHTML='The Computer Choice: '+ai;
        document.getElementById('result').innerHTML='Game Draw';
    }
    if(ai="rock"){
        document.getElementById('computer').innerHTML='The Computer Choice: '+ai;
        document.getElementById("result").innerHTML="You Won &#x1F60A";
    }
    if(ai=="scissor"){
        document.getElementById('computer').innerHTML='The Computer CHoice: '+ai;
        document.getElementById('result').innerHTML="You Lose!"
    }
}

function scissor(){
    let ai;
    let num=Math.random();
    num=num*100;
    if (num>=0 && num<=33){
        ai=="paper";
    }
    if(num>33 && num<=66){
        ai="rock";
    }
    if(num>66){
        ai="scissor";
    }
    
    if(ai=="paper"){
        document.getElementById('computer').innerHTML='The Computer Choice: '+ai;
        document.getElementById('result').innerHTML='You Won &#x1F60A';
    }
    if(ai="rock"){
        document.getElementById('computer').innerHTML='The Computer Choice: '+ai;
        document.getElementById("result").innerHTML="You Lose!";
    }
    if(ai=="scissor"){
        document.getElementById('computer').innerHTML='The Computer CHoice: '+ai;
        document.getElementById('result').innerHTML="Game Draw"
    }
}

function rock(){
    let ai;
    let num=Math.random();
    num=num*100;
    if (num>=0 && num<=33){
        ai=="paper";
    }
    if(num>33 && num<=66){
        ai="rock";
    }
    if(num>66){
        ai="scissor";
    }
    
    if(ai=="paper"){
        document.getElementById('computer').innerHTML='The Computer Choice: '+ai;
        document.getElementById('result').innerHTML=' You Lose!';
    }
    if(ai="rock"){
        document.getElementById('computer').innerHTML='The Computer Choice: '+ai;
        document.getElementById("result").innerHTML=" Game Draw";
    }
    if(ai=="scissor"){
        document.getElementById('computer').innerHTML='The Computer CHoice: '+ai;
        document.getElementById('result').innerHTML="You Won &#x1F60A"
    }
}