var enableClick = true;
var speed = 500;
$(".title").on("click", function (e) {
    e.preventDefault();
    if (enableClick) {
        activation(this);
        enableClick = false;
    }
})
function activation(el) {
    var isOn = $(el).hasClass("on")

    if (isOn) {
        $(el).removeClass("on");
        $(el).siblings("dd").stop().slideUp(speed, function () {
            enableClick = true;
        });
    } else {
        $(el).addClass("on");
        $(el).next("dd").stop().slideDown(speed, function () {
            enableClick = true;
        });

    }
}