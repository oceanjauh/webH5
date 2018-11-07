$(function(){
    //展开按按钮点击的时候
    $(".i-right").click(function(){
        //如果点击了满意按钮，禁止提交建议
        $(this).parent(".dgdp").siblings(".dp_detail").slideToggle();
        $(this).toggleClass("zhuanx");
    });
})