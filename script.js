console.log("I'm working");

var fruit = "apples are wonderful";
console.log(fruit);

var year=2023;
console.log(year);

window.onload=function(){

$(".title").css("color","red");
$(".green-box").click(changeColor);

$('.rock').click(openDialog);
$('.dialog').click(closeDialog);

$('.seed').hover(seedGrow,seedShrink);
setInterval(wormMove,5000);

$('.rock').draggable();

for (var i=0; i<27; i++){
    var worm = $(' <img class="worm" src="images/worm.gif">');
    var randTop = Math.random()*window.innerHeight;
    var randLeft = Math.random()*window.innerWidth;
    $(worm).css('top',randTop+'px');
    $(worm).css('left',randLeft+'px');

    $("body").append(worm);


}

}
function changeColor(){
    $(".green-box").css("height","500px");
    $(".green-box").css("width","500px");
    $(".green-box").css("background","purple");
    $(".green-box").css("left","800px");
    

}

function openDialog(){
    $('.dialog').css('display','block');

}

function closeDialog(){
    $('.dialog').css('display','none');

}

function seedGrow(){
    $('.seed').attr('src','images/seedling.png');
    $('.seed').css('width','300px');
    $('.seed').css('top','600px');
    $('.seed').css('left','100px');
    // $('.seed').css('width');

}
function seedShrink(){
    $('.seed').attr('src','images/seed.png');
    $('.seed').css('width','100px');
    $('.seed').css('top','700px');
    $('.seed').css('left','100px');
    

}

function wormMove(){
    //  for the single 
    // var randTop = Math.random()*window.innerHeight;
    // var randLeft = Math.random()*window.innerWidth;
    // $('.worm').css('top',randTop+'px');
    // $('.worm').css('left',randLeft+'px');

    // for the loop
    $('.worm').each(function(){

        cosonle.log(this)
        var randTop = Math.random()*window.innerHeight;
        var randLeft = Math.random()*window.innerWidth;
    
        $(this).css('top',randTop+'px');
        $(this).css('left',randLeft+'px');
    

    })

}
