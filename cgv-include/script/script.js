   // 따라다니는 퀵메뉴
   $(function(){
      $(window).scroll(function () {
         var scrollTopNum = $(document).scrollTop() + 150;
         if (scrollTopNum <= 150) {
             scrollTopNum == 150;
         }
         $("#quick").stop().animate({
             top: scrollTopNum
         }, 700);
     });


    
    var x = 0;
    
    setInterval(function(){
        if (x<2){
            x++;
        } else {
            x=0;
        }
        var sliderPostiton = x * (-1200) + "px"
        
        $(".sliderList").animate({left:sliderPostiton},400);
        console.log(x);
    }, 3000);
    
    
});