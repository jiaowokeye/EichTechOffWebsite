/**
 * Created by Po on 2017/4/7.
 */
$(function() {
    if ($(window).width() < 1210) {
        $('#floorLeft').css('left', 0);
    } else {
        var left = parseInt(($(window).width() - 1210) / 2);
        $('#floorLeft').css('left', left);
    }
    $(window).scroll(function(ev) {
        var top = $(window).scrollTop();
        if (top > 1000) {
            if (!$('#floorLeft').hasClass('to')) {
                $('#floorLeft').addClass('to');
            }
        } else if (top < 500) {
            if ($('#floorLeft').hasClass('to')) {
                $('#floorLeft').removeClass('to');
            }
        }

        if (top < 410) {
            $('#floorLeft li').attr('class', '');
            if (!$('#floorLeft li').eq(0).hasClass('active')) {
                $('#floorLeft li').eq(0).addClass('active');
            }
        } else if (top >= 410 && top < 962) {
            $('#floorLeft li').attr('class', '');
            if (!$('#floorLeft li').eq(1).hasClass('active')) {
                $('#floorLeft li').eq(1).addClass('active');
            }
        } else if (top >= 962 && top < 1848) {
            $('#floorLeft li').attr('class', '');
            if (!$('#floorLeft li').eq(2).hasClass('active')) {
                $('#floorLeft li').eq(2).addClass('active');
            }
        }

    });
    loadScript();
    $("#companyList .item").on("click", function() {
        var index = $(this).index() + 1;
        panTo(index);
    });
});

function toTop() {
    $("html,body").animate({
        scrollTop: 0
    }, 200);
}
var map = '';
var x = "";
var y = "";
/**
 * 
 * 
 */
function initialize(x, y) {
    map = new BMap.Map('map');
    var point = new BMap.Point(118.798649,31.939174);
    map.centerAndZoom(point, 22);
    map.addOverlay(new BMap.Marker(new BMap.Point(118.798649,31.939174)));
}
function loadScript() {
    var script = document.createElement("script");
    script.src = " http://api.map.baidu.com/api?v=2.0&ak=FD875602aba2509d2e43a52b98cf7b7f&s=1&callback=initialize";
    document.body.appendChild(script);
}