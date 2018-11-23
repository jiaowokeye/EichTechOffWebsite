var windowHeight = null;
var titleTop = null;
var fontSize = null;
$(function(){

    $(window).scroll(scroll);

    //导航栏点击事件
    $("#nav li").on("click",function(){
        $("#nav li a").removeClass("active");
        $(this).find("a").addClass("active");
    })
})



//导航栏变色提示在哪个区域
function scroll(){
    var top  = $(window).scrollTop();
    if(top>50){
        $("#nav-wrap").addClass('active');
        $('#nav-wrap #nav .logo img').css("height","60");
    }else{
        $("#nav-wrap").removeClass('active');
        $('#nav-wrap #nav .logo img').css("height","80");
    }
}

