

//These are all the variables used below
var movementx = 36;
var movingRight = false;
var movingLeft = false;
var movementy = 16;
var movingUp = false;
var movingDown = false;
var startLevel2 = false;
var gameStarted = false;
var characterSpeed = 1;
var reloadd = true;

function gameStartedFunction(){       //This function will hide the main starting heading when game starts
    if(reloadd){
        document.getElementById('startMessage').style.visibility = 'hidden';
        document.getElementById('message1').style.visibility = 'unset';
        window.setTimeout(function(){
            document.getElementById('message1').style.visibility = 'hidden';
        }, 2000)
        gameStarted = true;
    }
}

function onColidingWall(){        //This function will activate all the events which are triggered due to collision with wall
    document.getElementById("startMessage").innerHTML = "";
    document.getElementById("obstacelsAlert").innerHTML = "";
    document.getElementById("message1").innerHTML = "";
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message3").innerHTML = "";
    document.getElementById("message4").innerHTML = "";
    document.getElementById("message5").innerHTML = "";
    document.getElementById("message6").innerHTML = "";
    document.getElementById("message7").innerHTML = "";
    document.getElementById("endingMessage").innerHTML = "";
    if(level2message)
        clearInterval(ayushh);
    else
    level2message = true;
    document.getElementById("endingMessage1").style.visibility = "unset";
    document.getElementById("endingMessage2").style.visibility = "unset";
    document.getElementById("message8").innerHTML = `Your Score:- ${time}sec`;
    document.getElementById("message8").style.visibility = "unset";
    if(confirm("Game Over!! try again")){
        location.reload();
    }
    // document.getElementBytag('character').style.position = `static`;
    // document.getElementById('character').style.visibility = `hidden`;
    document.getElementById('obstacel1').style.position = `static`;
    document.getElementById('obstacel2').style.position = `static`;
    document.getElementById('obstacel3').style.position = `static`;
    document.getElementById('obstacel3').style.visibility = `hidden`;
    document.getElementById('obstacel2').style.visibility = `hidden`;
    document.getElementById('obstacel1').style.visibility = `hidden`;
    reloadd = false;
    document.getElementById('character').style.top = `16vw`;
    document.getElementById('character').style.left = `36vw`;
    // movementx = 36;
    // movementy = 16;
    movingDown = true;
    movingUp = true;
    movingLeft = true;
    movingRight = true;
    if(movingDown){
        clearInterval(moveDown);
    }
    if(movingUp){
        clearInterval(moveUp);
    }
    if(movingLeft){
        clearInterval(moveLeft);
    }
    if(movingRight){
        clearInterval(moveRight);
    }
    if(obstacelsLoop)
        clearInterval(ayush);
    else{
        obstacelsLoop = true;
    }
    // if(startLevel2){
    //     startLevel2 = false;
    //     obstacelsLoop = false;
    // }
    // gameStarted = false;
    // document.getElementById('startMessage').style.visibility = 'unset';
    // if(level2message){
    //     level2message = false;
    // }
    // document.getElementById('message1').style.visibility = 'hidden';
    // document.getElementById('message2').style.visibility = 'hidden';
    // document.getElementById('message3').style.visibility = 'hidden';
    // document.getElementById('obstacelsAlert').style.visibility = 'hidden';
    // if(startObstacels)
    //     startObstacels = false;
    // obstacelSpeed = 1;
    // characterSpeed = 1;
    // document.getElementById("obstacel1").style.left = `82vw`;
    // document.getElementById("obstacel2").style.left = `82vw`;
    // document.getElementById("obstacel3").style.left = `82vw`;
    // clearInterval(obstacel1interval);
    // clearInterval(obstacel2interval);
    // clearInterval(obstacel3interval);
    // clearInterval(obstacel1_1interval);
    // clearInterval(obstacel2_1interval);
    // clearInterval(obstacel3_1interval);
    // if(obstacel1interval>0){
    // }
    // if(obstacel2interval){
    // }
    // if(obstacel3interval){
    // }
    // if(obstacel1_1interval){
    // }
    // if(obstacel2_1interval){
    // }
    // if(obstacel3_1interval){
    // }
    // obstacel1x = 82;
    // obstacel1y = 15.4;
    // obstacel2x = 82;
    // obstacel2y = 15.4;
    // obstacel3x = 82;
    // obstacel3y = 15.4;
}

//Below four parts are codes for managing all the events on clicking the four buttons
    left.addEventListener('click', function(){
        if(!gameStarted){
            gameStartedFunction();
        }
        if(!movingLeft &&  movementx > 0){
            moveLeft = window.setInterval(function(){       //Interval for this key starts here 
                movingLeft = true;
                if(movingRight){       //This will stops the opposite movement interval and set its bool to false
                    clearInterval(moveRight);
                    movingRight = false;
                }
                if(movingUp){
                    clearInterval(moveUp);
                    movingUp = false;
                }
                if(movingDown){
                    clearInterval(moveDown);
                    movingDown = false;
                }
                movementx -= .2 * characterSpeed;
                document.getElementById('character').style.left = `${movementx}vw`;        //This will give keep on updating value of position property on loop to make the character move
                if(movementx < 0){        //This is the condition when the character hits the wall and followings are the events which are triggered
                    onColidingWall();
                }
            }, 10)
        }
    })

    right.addEventListener('click', function(){
        if(!gameStarted){
            gameStartedFunction();
        }
        if(!movingRight &&  movementx > 0){
            moveRight = window.setInterval(function(){
                movingRight = true;
                if(movingLeft){
                    clearInterval(moveLeft);
                    movingLeft = false;
                }
                if(movingUp){
                    clearInterval(moveUp);
                    movingUp = false;
                }
                if(movingDown){
                    clearInterval(moveDown);
                    movingDown = false;
                }
                movementx += .2 * characterSpeed;
                document.getElementById('character').style.left = `${movementx}vw`;
                if(movementx > 76){
                    onColidingWall();
                }
            }, 10)
        }
    })

    up.addEventListener('click', function(){
        if(!gameStarted){
           gameStartedFunction();
        }
        if(!movingUp && movementy > 0){
            moveUp = window.setInterval(function(){
                movingUp = true;
                if(movingDown){
                    clearInterval(moveDown);
                    movingDown = false;
                }
                if(movingLeft){
                    clearInterval(moveLeft);
                    movingLeft = false;
                }
                if(movingRight){
                    clearInterval(moveRight);
                    movingRight = false;
                }
                movementy -= .2 * characterSpeed;
                document.getElementById('character').style.top = `${movementy}vw`;
                if(movementy < 0){
                   onColidingWall();
                }
            }, 10)
        }
    })

    down.addEventListener('click', function(){
        if(!gameStarted){
            gameStartedFunction();
        }
        if(!movingDown &&  movementy < 34){
            moveDown = window.setInterval(function(){
                movingDown = true;
                if(movingUp){
                    clearInterval(moveUp);
                    movingUp = false;
                }
                if(movingLeft){
                    clearInterval(moveLeft);
                    movingLeft = false;
                }
                if(movingRight){
                    clearInterval(moveRight);
                    movingRight = false;
                }
                movementy += .2 * characterSpeed;
                document.getElementById('character').style.top = `${movementy}vw`;
                if(movementy > 35){
                    onColidingWall();
                }
            }, 10)
        }
    })




// This part is for creating the bool for obstacels true after 10 sec of starting the game
var obstacelsLoop = false;
ayush = window.setInterval(function(){
    if(!startLevel2 && !obstacelsLoop){
        if(gameStarted){
            obstacelsLoop = true;
            window.setTimeout(function(){
                if(gameStarted)
                    startLevel2 = true;
                    startingLevel2();
            }, 10000)
        }
    }
},100)



//This part is to display the alert line for obstacels
var level2message = false;
var startObstacels = false
function startingLevel2(){
    if(startLevel2 && !level2message){
        level2message = true;
        document.getElementById('message2').style.visibility = 'unset';
        ayushh = window.setTimeout(function(){
            if(level2message)
                document.getElementById('message2').style.visibility = 'hidden';
        }, 2000)
        window.setTimeout(function(){
            if(level2message)
                document.getElementById('message3').style.visibility = 'unset';
        }, 3000)
        window.setTimeout(function(){
            if(level2message)
                document.getElementById('message3').style.visibility = 'hidden';
        }, 5000)
        window.setTimeout(function(){
            if(level2message)
                document.getElementById('obstacelsAlert').style.visibility = 'unset';
        }, 8000)
        window.setTimeout(function(){
            if(level2message){
                document.getElementById('obstacelsAlert').style.visibility = 'hidden';
                startObstacels = true;
                startingObstacel1();
            }
        }, 11000)
    }
}


var obstacel1x = 82;
var obstacel1y = 15.4;
var obstacel2x = 82;
var obstacel2y = 5.4;
var obstacel3x = 82;
var obstacel3y = 25.4;
var obstacelSpeed = 1;
function startingObstacel1(){
    obstacel1x = 82;
    obstacel1y = 15.4;
    obstacel1interval =  window.setInterval(function(){
        if(startObstacels){
            obstacel1x -= .2 * obstacelSpeed;
            document.getElementById("obstacel1").style.left = `${obstacel1x}vw`;
            if(obstacel1x < -7){
                obstacel1x = 82;
                obstacel1y = 15.4;
                clearInterval(obstacel1interval);
                startingObstacel2();
            }
            if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
                clearInterval(obstacel1interval);
                onColidingWall();
            }
        }
    }, 10)
}
function startingObstacel2(){
    obstacel2x = 82;
    obstacel2y = 5.4;
    document.getElementById("obstacel2").style.top = `${obstacel2y}vw`;
    obstacel2interval =  window.setInterval(function(){
        if(startObstacels){
            obstacel2x -= .2 * obstacelSpeed;
            document.getElementById("obstacel2").style.left = `${obstacel2x}vw`;
            if(obstacel2x < -7){
                obstacel2x = 82;
                obstacel2y = 5.4;
                clearInterval(obstacel2interval);
                startingObstacel3();
            }
            if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
                clearInterval(obstacel2interval);
                onColidingWall();
            }
        }
    }, 10)
}
function startingObstacel3(){
    obstacel3x = 82;
    obstacel3y = 25.4;
    document.getElementById("obstacel3").style.top = `${obstacel3y}vw`;
    obstacel3interval =  window.setInterval(function(){
        if(startObstacels){
            obstacel3x -= .2 * obstacelSpeed;
            document.getElementById("obstacel3").style.left = `${obstacel3x}vw`;
            if(obstacel3x < -7){
                obstacel3x = 82;
                obstacel3y = 25.4;
                clearInterval(obstacel3interval);
                startingObstacelRepeat();
            }
            if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
                clearInterval(obstacel3interval);
                onColidingWall();
            }
        }
    }, 10)
}

function startingObstacelRepeat(){
    obstacelSpeed += 2;
    if(obstacelSpeed <= 3){
        characterSpeed++;
        startingObstacel1();
    }
    else{
        document.getElementById("message4").style.visibility = 'unset';
        window.setTimeout(function(){
            if(startObstacels){
                document.getElementById("message4").style.visibility = 'hidden';
            }
        }, 2000)
        window.setTimeout(function(){
            if(startObstacels){
                document.getElementById('message5').style.visibility = 'unset';
                startingObstacel1_1();
                obstacelSpeed = 1;
            }
        }, 3000)
        window.setTimeout(function(){
            if(startObstacels){
                document.getElementById('message5').style.visibility = 'hidden';
            }
        }, 5000)
    }
}


var obstacel1MovingUp = false;
var obstacel2MovingUp = true;
var obstacel3MovingUp = false;
function startingObstacel1_1(){
    obstacel1x = 82;
    obstacel1y = 15.4;
    obstacel1_1interval = window.setInterval(function(){
        if(startObstacels){
            obstacel1x -=.2 * obstacelSpeed;
            document.getElementById("obstacel1").style.left = `${obstacel1x}vw`;
            if(!obstacel1MovingUp){
                if(obstacel1y < 33.4){
                    obstacel1y += .2 * obstacelSpeed;
                    document.getElementById("obstacel1").style.top = `${obstacel1y}vw`;
                }
                else if(obstacel1y >= 33.4){
                    obstacel1MovingUp = true;
                }
            }
            else{
                if(obstacel1y > 0){
                    obstacel1y -= .2 * obstacelSpeed;
                    document.getElementById("obstacel1").style.top = `${obstacel1y}vw`
                }
                else if(obstacel1y <= 0){
                    obstacel1MovingUp = false;
                }
            }
            if(obstacel1x < -7){
                obstacel1x = 82;
                obstacel1y = 15.4;
                obstacel1MovingUp = false;
                clearInterval(obstacel1_1interval);
                startingObstacel2_1();
            }
            if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
                clearInterval(obstacel1_1interval);
                onColidingWall();
            }
        }
    }, 10)
}
function startingObstacel2_1(){
    obstacel2x = 82;
    obstacel2y = 15.4;
    obstacel2_1interval = window.setInterval(function(){
        if(startObstacels){
            obstacel2x -=.2 * obstacelSpeed;
            document.getElementById("obstacel2").style.left = `${obstacel2x}vw`;
            if(obstacel2MovingUp){
                if(obstacel2y > 0){
                    obstacel2y -= .2 * obstacelSpeed;
                    document.getElementById("obstacel2").style.top = `${obstacel2y}vw`
                }
                else if(obstacel2y <= 0){
                    obstacel2MovingUp = false;
                }
            }
            else{
                if(obstacel2y < 33.4){
                    obstacel2y += .2 * obstacelSpeed;
                    document.getElementById("obstacel2").style.top = `${obstacel2y}vw`;
                }
                else if(obstacel2y >= 33.4){
                    obstacel2MovingUp = true;
                }
            }
            if(obstacel2x < -7){
                obstacel2x = 82;
                obstacel2y = 15.4;
                obstacel2MovingUp = true;
                clearInterval(obstacel2_1interval);
                startingObstacel3_1();
            }
            if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
                clearInterval(obstacel2_1interval);
                onColidingWall();
            }
        }
    }, 10)
}
function startingObstacel3_1(){
    obstacel3x = 82;
    obstacel3y = 15.4;
    obstacel3_1interval = window.setInterval(function(){
        if(startObstacels){
            obstacel3x -=.2 * obstacelSpeed;
            document.getElementById("obstacel3").style.left = `${obstacel3x}vw`;
            if(!obstacel3MovingUp){
                if(obstacel3y < 33.4){
                    obstacel3y += .2 * obstacelSpeed;
                    document.getElementById("obstacel3").style.top = `${obstacel3y}vw`;
                }
                else if(obstacel3y >= 33.4){
                    obstacel3MovingUp = true;
                }
            }
            else{
                if(obstacel3y > 0){
                    obstacel3y -= .2 * obstacelSpeed;
                    document.getElementById("obstacel3").style.top = `${obstacel3y}vw`
                }
                else if(obstacel3y <= 0){
                    obstacel3MovingUp = false;
                }
            }
            if(obstacel3x < -7){
                obstacel3x = 82;
                obstacel3y = 15.4;
                obstacel3MovingUp = false;
                clearInterval(obstacel3_1interval);
                startingObstacelRepeat1();
            }
            if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
                clearInterval(obstacel3_1interval);
                onColidingWall();
            }
        }
    }, 10)
}


function startingObstacelRepeat1(){
    obstacelSpeed += 2;
    if(obstacelSpeed <= 3){
        characterSpeed++;
        startingObstacel1_1();
    }
    else{
        document.getElementById("message6").style.visibility = 'unset';
        window.setTimeout(function(){
            if(startObstacels){
                document.getElementById("message6").style.visibility = 'hidden';
            }
        }, 2000)
        window.setTimeout(function(){
            if(startObstacels){
                document.getElementById('message7').style.visibility = 'unset';
                startingObstacelFinal();
                obstacelSpeed = 1;
            }
        }, 3000)
        window.setTimeout(function(){
            if(startObstacels){
                document.getElementById('message7').style.visibility = 'hidden';
            }
        }, 5000)
    }
}


function startingObstacelFinal(){
    obstacel1x = 82;
    obstacel1y = 15.4;
    obstacel1_11interval = window.setInterval(function(){
        if(startObstacels){
            obstacel1x -=.2 * obstacelSpeed;
            document.getElementById("obstacel1").style.left = `${obstacel1x}vw`;
            if(!obstacel1MovingUp){
                if(obstacel1y < 33.4){
                    obstacel1y += .2 * obstacelSpeed;
                    document.getElementById("obstacel1").style.top = `${obstacel1y}vw`;
                }
                else if(obstacel1y >= 33.4){
                    obstacel1MovingUp = true;
                }
            }
            else{
                if(obstacel1y > 0){
                    obstacel1y -= .2 * obstacelSpeed;
                    document.getElementById("obstacel1").style.top = `${obstacel1y}vw`
                }
                else if(obstacel1y <= 0){
                    obstacel1MovingUp = false;
                }
            }
            if(obstacel1x < -7){
                obstacel1MovingUp = false;
                clearInterval(obstacel1_1interval);
            }
        }
        if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
            clearInterval(obstacel1_11interval);
            onColidingWall();
        }
    }, 10)
    obstacel2x = 82;
    obstacel2y = 15.4;
    obstacel2_11interval = window.setInterval(function(){
        if(startObstacels){
            obstacel2x -=.2 * obstacelSpeed;
            document.getElementById("obstacel2").style.left = `${obstacel2x}vw`;
            if(obstacel2MovingUp){
                if(obstacel2y > 0){
                    obstacel2y -= .2 * obstacelSpeed;
                    document.getElementById("obstacel2").style.top = `${obstacel2y}vw`
                }
                else if(obstacel2y <= 0){
                    obstacel2MovingUp = false;
                }
            }
            else{
                if(obstacel2y < 33.4){
                    obstacel2y += .2 * obstacelSpeed;
                    document.getElementById("obstacel2").style.top = `${obstacel2y}vw`;
                }
                else if(obstacel2y >= 33.4){
                    obstacel2MovingUp = true;
                }
            }
            if(obstacel2x < -7){
                obstacel2MovingUp = true;
                clearInterval(obstacel2_1interval);
            }
        }
        if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
            clearInterval(obstacel2_11interval);
            onColidingWall();
        }
    }, 10)
    obstacel3x = 82;
    obstacel3y = 15.4;
    document.getElementById("obstacel3").style.top = `${obstacel3y}vw`;
    obstacel3_11interval =  window.setInterval(function(){
        if(startObstacels){
            obstacel3x -= .2 * obstacelSpeed;
            document.getElementById("obstacel3").style.left = `${obstacel3x}vw`;
            if(obstacel3x < -7){
                obstacel1x = 82;
                obstacel1y = 15.4;
                clearInterval(obstacel3_1interval);
                if(obstacelSpeed == 1){
                    obstacelSpeed += 2;
                    startingObstacelFinal();
                }
                else{
                    ending();
                }
            }
        }
        if((movementx > (obstacel1x - 5) && movementx < (obstacel1x + 5)) && (movementy > (obstacel1y - 5) && movementy < (obstacel1y + 5)) || (movementx > (obstacel2x - 5) && movementx < (obstacel2x + 5)) && (movementy > (obstacel2y - 5) && movementy < (obstacel2y + 5)) || (movementx > (obstacel3x - 5) && movementx < (obstacel3x + 5)) && (movementy > (obstacel3y - 5) && movementy < (obstacel3y + 5))){
            clearInterval(obstacel3_11interval);
            onColidingWall();
        }
    }, 10)
}


function ending(){
    document.getElementById("endingMessage").style.visibility = "unset";
    document.getElementById("endingMessage1").style.visibility = "unset";
    document.getElementById("endingMessage2").style.visibility = "unset";
    document.getElementById("message8").innerHTML = `Your Score:- ${time}sec`;
    document.getElementById("message8").style.visibility = "unset";
    document.getElementById("character").style.visibility = "hidden";
}


var time = 0
window.setInterval(function(){
    if(gameStarted){
        time++;
        document.getElementById("time").innerHTML = `Time:- <br>${time}sec`;
    }
},1000)