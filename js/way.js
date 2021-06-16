var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = {
        center: new kakao.maps.LatLng(37.2661139, 126.9963683), // 지도의 중심좌표
        level: 5 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커를 표시할 위치와 title 객체 배열입니다 
var positions = [
    {
        title: '수원롯데몰점',
        latlng: new kakao.maps.LatLng(37.2679434, 126.9928903),

    },
    {
        title: '수원역점',
        latlng: new kakao.maps.LatLng(37.2679434, 126.9928903),

    },
    {
        title: '롯데백화점 수원점',
        latlng: new kakao.maps.LatLng(37.2662135, 127.0059579),

    },
    {
        title: '수원AK점',
        latlng: new kakao.maps.LatLng(37.2188238, 127.058975),

    }
];

// 마커 이미지의 이미지 주소입니다
var imageSrc = "img/marker.png";
// var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

for (var i = 0; i < positions.length; i++) {

    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 30);

    // 마커 이미지를 생성합니다    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage // 마커 이미지 
    });
}

////scroll bar custom

(function ($) {
    $(window).on("load", function () {
        $(".branch").mCustomScrollbar();
    });
})(jQuery);

////매장찾기

$(".branch li").on("click", function () {
    console.log(this);
    $(this).siblings().removeClass("on");
    $(this).addClass("on");
})
