window.onload=function (ev) {
    myDay();
    // 定义并调用自动播放函数
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    else {
        timer=setInterval(autoplay,2000);
    }
};

function myDay(){
    var d = new Date();
    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    var x = document.getElementById("date_box");
    x.innerHTML=d.getFullYear()+"年"+weekday[d.getDay()];
}
var wrap=document.getElementById('wrap');
var  pic=document.getElementById('pic');
var list=document.getElementById('list').getElementsByTagName('li');//为list的li排序号;
var index=0;
var timer=null;

// 定义图片切换函数
function autoplay(){
    index++;
    if(index>=list.length){
        index=0;
    }
    else {
        changeoptions(index);  //这个changeOption（index）；封装在代码最后，是把所有的图片都隐藏了，给当前的添加block
    }
}
// 鼠标划过整个容器时停止自动播放
wrap.onmouseover=function(){
    clearInterval(timer);
};
// 鼠标离开整个容器时继续播放至下一张
wrap.onmouseout=function(){
    timer=setInterval(autoplay,2000);
};
// 遍历所有数字导航实现划过切换至对应的图片
for(var i=0;i<list.length;i++){
    list[i].id=i;
    list[i].onmouseover=function(){
        clearInterval(timer);
        changeoptions(this.id);
    }
}
function changeoptions(curindex){
    for(var j=0;j<list.length;j++){
        list[j].className='';
        // pic.style.top=0;
    }
    list[curindex].className='active';
    pic.style.top=-curindex*150+'px';
    index=curindex;
}