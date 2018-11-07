$(function(){
    var Imglen = $(".pic li").length;
    //当图片等于四张的时候
    console.log(Imglen);
    if(Imglen == "4"){
        $(".dagang-xq .pic").css("width","6.86rem");
    }else if(Imglen == "1"){
        var back = $('.pic ul li').css('backgroundImage').replace('url(','').replace(')','');
        $(".pic ul li").css({
            "width":"inherit",
            "height":"inherit",
            "max-height":"4.54rem",
            "min-height":"2.22rem",
            "background-size":"contain",
            "background-position":"left",
        });
        $(".pic ul li").append("<img src="+back+">");
    }
    //判断文字部分是否超过6行
    var wzHeight = $(".article_content>pre").height();
    var outHeight = $(".pre2").height();
    var num1 = 0;
    console.log(wzHeight);
    console.log(outHeight);
    if(wzHeight == outHeight){
        $(".dagang-xq span").hide();
    }
    $(".dagang-xq span").click(function(){
        num1++;
        console.log(num1);
        if(num1%2!=0){
            //展开了
            $(this).siblings(".article").find("pre").css({"overflow":"inherit","-webkit-line-clamp":" unset"});
            $(".article pre").css({"overflow":"inherit","-webkit-line-clamp":" unset"});
            // $(".dagang-xq span").html("收起");
            $(this).html("收起");
        }else{
            $(".dagang-xq span").html("全文");
            $(".article pre").css({"overflow":"hidden","-webkit-line-clamp":"2"});
        }
    });
    //判断显示满意还是建议
    /*var num2 = 0;
    $(".i-right").click(function(){
        num2++;
        console.log(num2);
        if(num2%2!=0 || num2 ==1){
            $("#tjsj").addClass("tjjyi").removeClass("manyi");
        }else if(num2%2 == 0){
            $("#tjsj").addClass("manyi").removeClass("tjjyi");
        }
    });*/
    //展开按按钮点击的时候
    $(".i-right").click(function(e){
        //如果点击了满意按钮，禁止提交建议
        e.stopPropagation();
        $(this).parent(".dgdp").siblings(".dp_detail").slideToggle();
        $(this).toggleClass("zhuanx");
    });
});