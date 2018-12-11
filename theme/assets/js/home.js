function preloader() {
    if (document.images) {
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();
        var img4 = new Image();
        var img5 = new Image();
        var img6 = new Image();
        var img7 = new Image();
        var img8 = new Image();
        var img9 = new Image();
        var img10 = new Image();

        img1.src = "./uploads/2018/11/h_myrna.jpg";
        img2.src = "./uploads/2018/11/h_teresa.jpg";
        img3.src = "./uploads/2018/11/h_tyler.jpg";
        img4.src = "./uploads/2018/11/h_lorenzo.jpg";
        img5.src = "./uploads/2018/11/h_fatima.jpg";
        img6.src = "./uploads/2018/11/h_lisa.jpg";
        img7.src = "./uploads/2018/11/h_laccio.jpg";
        img8.src = "./uploads/2018/11/h_castro.jpg";
        img9.src = "./uploads/2018/11/h_ohad.jpg";
        img10.src = "./uploads/2018/11/h_peter.jpg";
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);

$('#mag').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_marieagnes.jpg)');
})
$('#mk').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_myrna.jpg)');
})
$('#tr').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_teresa.jpg)');
})
$('#ta').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_tyler.jpg)');
})
$('#lp').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_lorenzo.jpg)');
})
$('#fr').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_fatima.jpg)');
})
$('#ljw').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_lisa.jpg)');
})
$('#la').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_laccio.jpg)');
})
$('#jc').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_castro.jpg)');
})
$('#on').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_ohad.jpg)');
})
$('#pb').on('mouseover', function() {
    $('#guest-image').css('background-image', 'url(./uploads/2018/11/h_peter.jpg)');
})

function hover(description) {
    console.log(description);
    document.getElementById('image-caption').innerHTML = description;
}