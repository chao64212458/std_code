let canvas = document.getElementById('canvas');
let w = canvas.parentElement.parentElement.offsetWidth;
let lineWidth = 6;
let cW = w + lineWidth * 3 / 2;
let cH = w + lineWidth * 3 / 2;
canvas.width = cW;
canvas.height = cH;
let ctx = canvas.getContext('2d');
let x0 = cW / 2;
let y0 = cH / 2;
let r = cW / 2 - lineWidth;
let count = 0;
let activeIndex = 0;
let num = 0;
let tween1, tween2;
let isClick = false;
let isLineTo = false;
let $nav_a = $('.i_pro_tanNav a');
let $tanCon = $('.i_pro_tanCon');

let rotateCount = 0;

position = {sAngle: 0, eAngle: 0};

$nav_a.click(function () {
    let i = $(this).index();
    if (i != activeIndex) {
        if (!isClick) {
            isClick = true;
            if (tween1) TWEEN.remove(tween1);
            if (tween2) TWEEN.remove(tween2);
            if (activeIndex == (rotateCount - 1) && i == 0) {
                count++;
            } else {
                if(activeIndex < i){
                    count = count + i - activeIndex
                     console.log('目标'+i+' 》 当前'+activeIndex)
                }else {
                    count = count + rotateCount - activeIndex + i  ;

                    console.log('目标'+i+' < 当前'+activeIndex)
                }
            }
            if (isLineTo) count--;

            lineTo(1000)
        }
    }


});

$(window).resize( function  () {
    w = canvas.parentElement.offsetWidth;
    cW = w + lineWidth * 3 / 2;
    cH = w + lineWidth * 3 / 2;
    canvas.width = cW;
    canvas.height = cH;
    x0 = cW / 2;
    y0 = cH / 2;
    r = cW / 2 - lineWidth;
});


function circleInit(r) {
    rotateCount = r;
    angle =  2 / r;
    lineTo(5000)
}

function lineTo(t,r) {

    isLineTo = true;

    if (!isClick) count++;

    num = angle * count;

    tween1 = new TWEEN.Tween(position).to({eAngle: num}, t).easing(TWEEN.Easing.Cubic.InOut).onUpdate(createLine).onComplete(lineToOver).start();

}

function lineToOver(t) {
    isClick = false;
    isLineTo = false;
    activeIndex = count % rotateCount;
    $nav_a.removeClass('active').eq(activeIndex).addClass('active');
    $tanCon.removeClass('active').eq(activeIndex).addClass('active');
    tween2 = new TWEEN.Tween(position).to({sAngle: position.eAngle}, 1000).easing(TWEEN.Easing.Cubic.InOut).onUpdate(createLine).onComplete(lineClearOver).start();
}

function lineClearOver() {

    lineTo(5000)
}

function createLine() {
    ctx.clearRect(0, 0, cW, cH);
    ctx.beginPath();
    let gradient = ctx.createLinearGradient(0, 0, cW, cH);
    gradient.addColorStop("0", "rgba(224,116,5,.9)");
    ctx.strokeStyle = gradient;
    ctx.lineWidth = lineWidth;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 6;
    ctx.shadowColor = 'rgba(224,116,5,.9)';

    ctx.arc(x0, y0, r, position.sAngle * Math.PI, position.eAngle * Math.PI);
    ctx.stroke()
}

function a(){}

animate();

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
}