$(".button").on('click', function() {
    $(".slider").css("width", "250px");
    $(".button").css("transform", "translateX(250px)"); 
  });
  
  $(".close").on('click', function() {
    $(".slider").css("width", "0");
    $(".button").css("transform", "translateX(0px)"); 
  });
  $(".singer1").on('click',function(){
    $(".display,.display1,.display2,.display3").css({"height":"0","overflow":"hidden"})
let heights=$('.display').css('height');
let height=$('.display').css('overflow');
if(heights==="0px"){
    $(".display").css({"height":"15vh",})

}else {
 $(".display").css({"height":"0","overflow":"hidden"})
    // $(".display").css({"overflow":"hidden"})

}
  });
  $(".singer2").on('click',function(){
    $(".display, .display1, .display2, .display3").css({"height": "0", "overflow": "hidden"});
let heights=$('.display1').css('height');
let height=$('.display1').css('overflow');
if(heights==="0px"){
    $(".display1").css({"height":"25vh",})

}else {
 $(".display1").css({"height":"0","overflow":"hidden"})
    // $(".display").css({"overflow":"hidden"})

}
  });
  $(".singer3").on('click',function(){
    $(".display, .display1, .display2, .display3").css({"height": "0", "overflow": "hidden"});
let heights=$('.display2').css('height');
let height=$('.display2').css('overflow');
if(heights==="0px"){
    $(".display2").css({"height":"30vh",})

}else {
 $(".display2").css({"height":"0","overflow":"hidden"})
    // $(".display").css({"overflow":"hidden"})

}
  });
  $(".singer4").on('click',function(){
    $(".display, .display1, .display2, .display3").css({"height": "0", "overflow": "hidden"}); 
let heights=$('.display3').css('height');
let height=$('.display3').css('overflow');
if(heights==="0px"){
    $(".display3").css({"height":"50vh",})

}else {
 $(".display3").css({"height":"0","overflow":"hidden"})
    // $(".display").css({"overflow":"hidden"})

}
  });
$(document).ready(function() {
    const endTime = new Date('December 31, 2024 23:59:59').getTime(); 

    const countdown = () => {
        const now = new Date().getTime();
        let timeLeft = endTime - now;

       

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        $('#days').text(days < 10 ? '0' + `${days} D` : `${days} D`);
        $('#hours').text(hours < 10 ? '0' + `${hours} h` : `${hours} h`);
        $('#minutes').text(minutes < 10 ? '0' + `${minutes} m` : `${minutes} m`);
        $('#seconds').text(seconds < 10 ? '0' + `${seconds} s` : `${seconds} s`);
        
       
        if (timeLeft > 0) {
            setTimeout(countdown, 1000); 
        }
    };

    countdown(); 
});



$(".link").on('click',function(e){
let sectionid=$(e.target).attr("href");
console.log(sectionid);
let  duration= $(sectionid).offset().top;

$("html,body").animate({ scrollTop: duration }, 3000);
})

