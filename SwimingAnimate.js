$(document).ready(() => {
    window.onresize = swiming;
    for (i = 0; i < 10; i++) {
        $("ul").append(`<li id='fish${i}'><img src='Image/fish.png'></li`);
        swiming(`fish${i}`);
    }
    //Event Onclick
    $(window).click((ev) => {
        $("li").each(function() {
            $(this).stop();
            setTimeout(moving($(this).attr("id"), ev.pageY, ev.pageX, 500 + Math.random() * 1000), 1000);
        });
    });
});
//Function
const swiming = (fish) => {
    var time = 1000 + Math.random() * 1000;
    var top = Math.random() * ($(document).height() - 50);
    var left = Math.random() * ($(document).width() - 50);
    moving(fish, top, left, time);
}
const moving = (fish, top, left, time) => {
    $("#" + fish).animate({ left, top }, time, () => { swiming(fish); });
}