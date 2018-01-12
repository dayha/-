$(function () {
    $('.site span').eq(1).css("color","rgb(102,102,102)")
    $('.main1_foot ul li').mouseover(function () {
        $(this).addClass('change_color').siblings().removeClass('change_color');
        $('.main1_foot div').eq($(this).index()).addClass('show').siblings().removeClass('show');
    })
    $('.main1_foot ul li').mouseout(function () {
        $(this).removeClass('change_color');
    });
});