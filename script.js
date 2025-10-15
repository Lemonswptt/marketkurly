$(function(){
    function moveslider(){
        $(".slider-wrap").animate({marginLeft: "-1920px"}, 600, function(){
            $(".slider-wrap").append($(".slider").first())
            $(".slider-wrap").css({marginLeft: "0"})
        })
    }

    setInterval(moveslider, 3000);
})