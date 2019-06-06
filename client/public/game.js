$(document).ready(function(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var height = 40;
    var width = 90;
    var x = 70;
    var y = canvas.height - 300;
    var dx = 0;
    var dy = 0;
    let randy = Math.floor(Math.random() * 300) + 75
    let score = 0;
    let sec = 0;
    let render;
    let towerW = 80;
    let towerX = 480;
    let highScore = 0;
    let num = 0;
    let bool = false;
    let imgUp = document.createElement('img');
    imgUp.src = 'images/up.png';
    let imgDown = document.createElement('img');
    imgDown.src = 'images/down.png';
    let imgLeft = document.createElement('img');
    imgLeft.src = 'images/left.png';
    let imgRight = document.createElement('img');
    imgRight.src = 'images/right.png';

    let picArr = [imgUp, imgRight, imgDown, imgLeft];

    $("#play-again").unbind().on('click', function(){
        setUp();
    })

    function drawDisc(img) {
        ctx.beginPath();
        ctx.drawImage(img, x, y, width, height);
        ctx.fill();
        ctx.closePath();
    }

    console.log(randy)

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 87:

            if(bool){
                dy = -13;
                sec = 0;
            }
            else{
                bool = true;
                setTimeout(setUp, 200);
            }
            break;
        }
    };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if(y < 600 && y > -30){
            y += dy + (.32 * (sec * sec))/2;
        }
        else if(y > canvas.height || y < -30){
            y = canvas.height - 20;
            lose()
            bool = false;
        }

        towerX -= 10;

        if (towerX === -50){
            randy = Math.floor(Math.random() *300) + 75
            towerX = 480;
        }

        if(x === towerX + width){
            score++
            
            $("#score").text("Score: " + score)

            if(score > highScore){
                highScore = score;
                $("#highscore").text("High Score: " + highScore)
            }
        }

    
        if(y + 5  >= 0 && y + 5 <= randy && x + 80 >= towerX && x + 10 <= towerX + towerW){
            bool = false;
            lose();
        }
        if(y + height - 5 >= randy + 200 && y + height - 5 <= 600 && x + 80 >= towerX && x + 10 <= towerX + towerW){
            bool = false;
            lose();
        }

        num = (num + 1) % picArr.length;
        drawDisc(picArr[num]);
        
        //upper tower
        tower(0,randy,-180,-90);
        //lower tower
        tower(randy+200,600,200,200);
        sec += .75
    }

    let tower = function(a, b, c, e){

        ctx.beginPath();
        ctx.rect(towerX, a, towerW, b);
        ctx.fillStyle = "rgb(255, 0, 0, 1)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(towerX, randy + c, towerW, 180);
        ctx.fillStyle = "rgb(255, 255, 255, 1)";
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.rect(towerX, randy + e, towerW, 90);
        ctx.fillStyle = "rgb(0, 0, 255, 1)";
        ctx.fill();
        ctx.closePath();
    }

    let lose = () => {
        clearInterval(render)
        $("#play-again").show();
        $("#howto").show();
        $("#code-link").show();

        $("#play-again").unbind().on('click', function(){
            bool = true;
            setUp();
        })
    }

    let setUp = () => {
        x = 70;
        y = canvas.height - 300;
        dy = 0;
        randy = Math.floor(Math.random() * 300) + 75 
        score = 0;
        sec = 0;
        towerW = 80;
        towerX = 480;
        
        $("#score").text("Score: " + score)
        $("#play-again").hide();
        $("#howto").hide();
        $("#code-link").hide();

        render = setInterval(draw, 25);
    }
})