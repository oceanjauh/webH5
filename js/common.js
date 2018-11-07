function Rem(width,height) {
    //width->设计图宽度，height->设计图高度------------------------------
    var deviceWidth = $(window).width();//设备宽度
    var deviceHeight = $(window).height();//设备高度
    var deviceRatio = deviceWidth/deviceHeight;//设备宽高比；
    var ratio = width/height;//设计图宽高比；

    //判断是否是电脑，如果是电脑则返回true,否则返回false
    this.isPc = function () {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    };
    // rem方法适配屏幕
    this.setRem = function () {
        //判断设备宽高比和设计图宽高比
        // 宽度大，要按高适配
        if(this.isPc()){
            $("body").width(deviceHeight*width/height);
        }else {
            // if(deviceRatio>=ratio){
            //     $("body").width(deviceHeight*width/height);
            // }
        }
        //
        // 高度大，要按宽适配，因为宽度是100%，所以不用管
        // if(deviceRatio<ratio){}
        $("html").css("fontSize",$("body").width()*100/width);
        $("body").css("opacity",1);
    };
}