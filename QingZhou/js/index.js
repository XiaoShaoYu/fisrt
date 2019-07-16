
/*
let Oa = $('#crice i');
let size = Oa.length;
var time = null;
var Num = -1920;
var Content = 1;
let Banner = $('.banner-img');
let Size = $('.banner-img li').length;

function doSlider() {
    //clearTimeout(time);
    Banner.stop().animate({
        'left': Content * Num
    }, 1500, function () {
        if (Content >= Size - 1) {
            Content = 1;
            Banner.css({ 'left': Content * Num + 'px' })
        } else if (Content == 0) {
            Content = Size - 2;
            Banner.css('left', (Size) * Num + 'px');
        }
    });
}
time = setInterval(slider, 2000);
$('#banner').on('mouseover', function () {
    clearInterval(time);
});
$('#banner').on('mouseleave', function () {
    time = setInterval(slider, 3000);
})
function slider() {
    Content++;
    doSlider();
}
*/
let DesCon = document.getElementById('Des-con');
let Oli = DesCon.getElementsByTagName('li');
let XXK = document.getElementsByClassName('XXK');
function Change() {
    for (let jm = 0; jm < Oli.length; jm++) {
        Oli[jm].className = '';
        XXK[jm].style.display = "none";
    }
}
Change();
XXK[0].style.display = "block";
Oli[0].className = 'active';
for (let i = 0; i < Oli.length; i++) {

    Oli[i].onclick = () => {
        Change();
        Oli[i].className = 'active';
        XXK[i].style.display = "block";
    }
}


let Team = document.getElementById('team');
let OTeamli = Team.getElementsByTagName('li');
let Omodal = Team.getElementsByTagName('p');

for (let n = 0; n < OTeamli.length; n++) {

    OTeamli[n].onmouseenter = function () {
        Omodal[n].style.background = "rgba(0,0,0,0)"
    };
    OTeamli[n].onmouseleave = function () {
        Omodal[n].style.background = "rgba(0,0,0,.5)"
    };
}


// 点击上一张按钮切换图片
/*
btn_prev.click(function () {
    current--;
    doSlider();
});
// 点击下一张按钮切换图片
btn_next.click(function () {
    current++;
    doSlider();
});*/