/**
 * Created by hxh on 2017/4/6.
 */

function addOnLoad(func) {
    var oldOnLoad = window.onload;

    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

addOnLoad(myFunction);

function myFunction() {

    var drawing = document.getElementById("drawing");
    var drawingOther = document.getElementById("drawing-other");
    var drawing2 = document.getElementById("drawing2");

    if (drawing.getContext){
        var context = drawing.getContext("2d");
        var contextOther = drawingOther.getContext("2d");
        var context2 = drawing2.getContext("2d");

        // context.fillStyle = "red";
        // context.strokeStyle = "#0000FF";
        // 设置阴影
        context.shadowBlur = 4;
        context.shadowColor = "rgba(255, 0, 0, 0.5)";
        context.shadowOffsetX = 10;
        context.shadowOffsetY = 5;

        // 画矩形
        context.fillStyle = "red";
        context.fillRect(10, 10, 100, 100);

        context.fillStyle = "rgba(0, 0, 255, 0.5)";
        context.fillRect(30, 30, 100, 100);

        // clear rect
        context.clearRect(40, 40, 10, 10);

        // 设置阴影
        contextOther.shadowBlur = 4;
        contextOther.shadowColor = "rgba(255, 0, 0, 0.5)";
        contextOther.shadowOffsetX = 10;
        contextOther.shadowOffsetY = 5;
        // 画矩形框
        contextOther.strokeStyle = "#FF0000";
        contextOther.strokeRect(10, 10, 50, 50);

        contextOther.strokeStyle = "rgba(0, 0, 255, 0.5)";
        contextOther.strokeRect(30, 30, 50, 50);

        // begin path
        context2.beginPath();

        context2.arc(100, 100, 99, 0, 2*Math.PI, false);

        context2.moveTo(194, 100);
        context2.arc(100, 100, 94, 0, 2*Math.PI, false);

        context2.moveTo(100, 100);
        context2.lineTo(100, 20);

        context2.moveTo(100, 100);
        context2.lineTo(35, 100);

        // context2.fill();
        context2.stroke();
        // context2.closePath();

        context2.textAlign = "center";
        context2.fillText("12", 100, 20);

    }

    var drawing3 = document.getElementById("drawing3");
    if (drawing3.getContext) {

        var context3 = drawing3.getContext("2d");

        context3.fillStyle = "green";
        context3.strokeStyle = "red";
        // 开始路径
        context3.beginPath();
        // 画外圆
        context3.arc(100, 100, 99, 0, 2 * Math.PI, false);
        // 画内圆
        context3.moveTo(194, 100);
        context3.arc(100, 100, 94, 0, 2 * Math.PI, false);

        context3.textAlign = "center";
        context3.fillText("12", 100, 20);

        // 变换原点
        context3.translate(100, 100);
        // 旋转图像/表针
        context3.rotate(1);
        // 绘制表针
        context3.moveTo(0, 0);
        context3.lineTo(0, -80);
        // 绘制分针
        context3.moveTo(0, 0);
        context3.lineTo(-65, 0);
        // 描边路径
        context3.stroke();

    }

    var drawing4 = document.getElementById("drawing4");
    if (drawing4.getContext){

        var context4 = drawing4.getContext("2d");
        var gradient = context4.createRadialGradient(55, 55, 10, 55, 55, 30);

        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");
        context4.fillStyle = gradient;
        context4.fillRect(30, 30, 50, 50);

    }

}
















