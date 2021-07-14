$(function(){

    ////////////////////////////////////////////////// pc 언어상자 
    
        var $input=$("input#lang"); // input상자 
        var $arrow=$(".opt span.arrow"); // 화살표 
        var $langlist=$(".langlist"); // 리스트 전체 
    
        $langlist.find("a").on("click",function(){
            $input.val($(this).text()); // 언어 선택시 입력상자 내용 변경
            $(this).parent().addClass("on").siblings().removeClass("on");
            // 이벤트발생한 a의 부모인 li에 on 클래스 생성 
            $langlist.toggle(); // 언어목록 숨김처리
        });
        $input.add($arrow).on("click",function(){
            $langlist.toggle(); 
            $arrow.toggleClass("arrow-up");
        });
        $(".opt").on("mouseleave",function(){
            $langlist.hide();
            $arrow.removeClass("arrow-up");
        });
    
    ////////////////////////////////////////////////// Mobile 언어상자 
    
    // .one() : 딱 한번만 실행되는 메서드
    // strFome : 문자열 변수 
    $(function(){
        $(window).one("load",function(){
            var strForm = '<form action="#" name="frmLang" method="post"><fieldset><legend>다국어서비스</legend> <label for="langsrv" class="blind">언어선택</label><select name="langsrv" id="langsrv"></select></fieldset></form>';
            $("footer>.fContainer>address").before(strForm);
            // .before 이전위치 
            // .each 순차적으로 하나씩 접근
            $(".langlist>li>a").each(function(idx){
                var optCont='<option value="'+idx+'">'+$(this).text()+'</option>';
                $("#langsrv").append(optCont);
            });
       
       
        });
    });
    
    
     
    
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // .siblings() : 형제요소 선택 
    // 변수 (특수기호) : $  _ 
    // .add()  : 추가 
    // .before()  : 선택 요소 이전 위치에 새 요소 생성 
    // .after()  : 다음 위치에 새 요소 생성 
    // .toggleClass() : 지정한 클래스가 없으면 생성, 있으면 없앰
    // .trigger() : 강제로 특정 이벤트 발생 
    // str : 문자열 변수 
    // .append() : 선택한 요소의 마지막 위치에 새 클래스 생성
    // .each() : 여러개의 요소에 순차적으로 하나씩 접근 
    // .toggle() : 선택한 요소가 보이면 숨기고, 숨겨져있으면 나타냄
    // .val() : input 속성 중 텍스트 변경 
    // .random() : 0 ~ 1 사이에 난수 반환 
    // Math.floor : 소수점 첫째자리에서 내림하여 정수 반환 