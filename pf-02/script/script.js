$(function(){

// accordion_menu
    $(".accordion-menu>ul>li").hover(function(){
        $(this).find(".submenu").stop().slideDown(500);
    },
    function(){
        $(this).find(".submenu").stop().slideUp(500);
    });
    
// fade-in-out
    $(".slideList").children("div:gt(0)").hide();
    var x=0;

    // setInterval : 일정시간동안 반복하여 실행
    setInterval(function(){
        var next = (x+1)%3;
        $(".sliderList").find("div").eq(x).fadeOut();
        $(".sliderList").find("div").eq(next).fadeIn();
        x = next;
        console.log(x);
    },3000);
    
        
});