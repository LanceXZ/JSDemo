$(function(){

    var $window = $('.window');
    var $bird = $('.bird');
    var gameState = 2;//游戏状态,0:游戏结束 1:游戏中 2:游戏未开始
    var pipeId = 0;//管道id
    var pipeTopHeight;/*上管道的高度*/
    var pipeBottomHeight;/*下管道的高度*/
    var gapHeight = 150;/*间隙高度*/
    var pipe = null;/*管道html结构*/
    var pipeMoveSpeed = 1300;/*管道移动速度*/
    var fallTime = 1000;/*小鸟下落的时间*/

    /*生产管道定时器*/
    var int = setInterval(function(){
        if(gameState === 1){
            spawnPipe();
            movePipes();
        }
    },pipeMoveSpeed);
    /*生产管道定时器 End*/
    /*生产管道*/
    function spawnPipe(){
        pipeId++;
        pipeTopHeight = Math.floor(Math.random() * 200) + 50;
        pipeBottomHeight = $window.height() - pipeTopHeight - gapHeight;

        pipe = '<div class="pipe" pipe-id="' + pipeId + '"><div style="height: ' + pipeTopHeight + 'px" class="topHalf"></div><div style="height:' + pipeBottomHeight + 'px" class="bottomHalf"></div></div>';
        $window.append(pipe);
    }
    /*生产管道 End*/
    /*移动管道*/
    function movePipes(){
        $('.pipe').each(function(){
            $(this).animate({
                right:'+=160px'
            },pipeMoveSpeed,'linear');
        })
    }
    /*移动管道 End*/

    /*小鸟位置定时器*/
    var birdPosInterval = setInterval(function(){
        if(gameState === 1){
            birdPos();
        }
    },10)
    /*小鸟位置定时器 End*/
    /*小鸟位置*/
    function birdPos(){
        if(parseInt($bird.css('bottom')) === 0){
            gameEnd();
        }
        var curPipe = $('.pipe:nth-of-type(4)');
        if(curPipe.length > 0){
            var pipeTop = curPipe.find('.topHalf'),
                pipeBottom = curPipe.find('.bottomHalf');
            if($bird.offset().left+$bird.width() > curPipe.offset().left && $bird.offset().left < (curPipe.offset().left + curPipe.width())){
                if($bird.offset().top < (curPipe.offset().top + pipeTop.height()) ||
                    ($bird.offset().top + $bird.width()) > (curPipe.offset().top + pipeTop.height() + gapHeight)){
                    gameEnd();
                }
            }else if($bird.offset().left > curPipe.offset().left + curPipe.width()){
                $('.score').text(curPipe.attr('pipe-id'));
            }
        }
    }
    /*小鸟位置 End*/
    /*游戏开始*/
    $(window).mousedown(function (){
        birdFlap();
        if(gameState === 2){
            gameState = 1;
            deleteInterval();
        }
    })
    $(window).keydown(function(e){
        if(e.keyCode === 32){
            birdFlap();
            e.preventDefault();
        }
        if(gameState === 2){
            gameState = 1;
            deleteInterval();
        }
    })

    function deleteInterval(){
        setTimeout(function(){
            var int = setInterval(function(){
                if(gameState === 1){
                    deletePipe();
                }
            },pipeMoveSpeed)
        },2050)
    }
    /*删除第一管道*/
    function deletePipe(){
        $('.window .pipe').first().remove();
    }
    /*删除第一管道 End*/
    function birdFlap(){
        if(gameState === 1||gameState === 2){
            $bird.css('transform','rotate(-20deg)');
            $bird.stop().animate({bottom:'+=60px'},200,function(){
                birdPos();
                $bird.css('transform','rotate(0deg');
                $bird.stop().animate({bottom:'-=60px'},200,function(){
                    birdPos();
                    gravity();
                })
            })
        }
    }
    /*游戏开始 End*/
    /*小鸟自由落体*/
    function gravity(){
        var birdPercent = parseInt($bird.css('bottom')) / $window.height();
        var totalFallTime = fallTime * birdPercent;
        $bird.stop().animate({bottom:'0'},totalFallTime,'linear')
            .css('transform','rotate(90deg)');
    }
    /*小鸟自由落体 End*/
    /*游戏结束*/
    function gameEnd(){
        clearInterval(birdPosInterval);
        $('.pipe').stop();
        gravity();
        gameState = 0;
    }
    /*游戏结束 End*/
})