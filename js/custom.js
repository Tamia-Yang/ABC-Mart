var $btn = $("#login dl dt a");
var $dt = $("#login dl dt");
var $dd = $("#login dl dd");
// var $dd = $("#login dl dd");

$btn.on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");

    $dt.removeClass("on");
    $(this).parent("dt").addClass("on");

    $dd.hide();
    $(target).show();

})