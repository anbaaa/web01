// JavaScript Document

//메뉴
$(".navi li").mouseover(function( ){      
	  $(this).find(".submenu").stop( ).slideDown( );  //.find() : 어떤 요소의 하위요소 중 특정요소를 찾을 때 사용  
  }).mouseout(function( ){
	  $(this).find(".submenu").stop( ).slideUp( );
  });
 
 //이미지 슬라이딩
 $("#imgslide>a:gt(0)").hide( );    //gt(0) : 해당 번째(n) 다음 요소들에 스타일이나 동작이 적용
setInterval(function( ){
$("#imgslide>a:first-child").fadeOut( )
 .next("a").fadeIn( )
 .end( ).appendTo("#imgslide");},3000);    //.appenTo() : 선택한 요소를 다른 요소 안에 넣는다.
 
 //탭메뉴
 var tabBtn = $(".tab_btn > ul > li");  //각각의 버튼을 변수에 저장
    var tabCont = $(".tab_cont > div");  //각각의 콘텐츠를 변수에 저장
    tabCont.hide().eq(0).show(); //콘텐츠 내용 숨기기
    tabBtn.click(function(e){   //버튼이 타겟(순서)을 변수에 저장
    e.preventDefault();
    var target = $(this);	
    var index = target.index(); //버튼의 순서를 변수에 저장
    tabBtn.removeClass("active"); //버튼의 클래스를 삭제
    target.addClass("active");      //타겟의 클래스를 추가
    tabCont.css("display","none"); 
    tabCont.eq(index).css("display","block");
 }); 

//모달
$(".cc").click(function ( ) {
    $(".modal").show( );
 });

 $(".button button").click(function ( ) {
     $(".modal").hide( );
 }); 












