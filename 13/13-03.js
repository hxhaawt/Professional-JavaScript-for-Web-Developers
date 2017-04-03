/**
 * Created by hxh on 2017/3/27.
 */

//
// $(document).ready(function () {
//     var $myBtn = $("#myBtn");
//
//     $myBtn.onclick = function () {
//
//     };
// });


function addLoadEven(func) {
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

addLoadEven(myTest);



function myTest() {

    /*
    // var btn = document.getElementById("myBtn");
    var btn = document.getElementsByTagName("div")[0];

    function btnHandler(event) {
        switch (event.type){
            case "click":
                alert("Hello 1 " + event.clientX + " " + event.clientY);
                event.stopPropagation();
                break;

            case "dblclick":
                alert("Hello 2");
                event.stopPropagation();
                break;

            case  "mouseover":
                event.target.style.backgroundColor = "red";
                break;

            case  "mouseenter":
                event.target.style.backgroundColor = "blue";
                break;

            case  "mouseleave":
                event.target.style.backgroundColor = "yellow";
                break;

            case "mouseout":
                this.style.backgroundColor = "";
                break;

            default :
                break;
        }
    }

    btn.onclick = btnHandler;
    // btn.ondblclick = btnHandler;
    // btn.onmouseover = btnHandler;
    // btn.onmouseout = btnHandler;


    // document.getElementsByTagName("div")[0].onclick = function (event) {
    //     alert(event.type);
    // };

    // window.addEventListener("resize", function () {
    //     alert("size is change");
    // }, false);
    */

    // (function () {
    //     var showCount = 0;
    //
    //     window.addEventListener("pageshow", function () {
    //         showCount++;
    //         alert(showCount + "persisted: " + event.persisted);
    //     }, false);
    //
    // })();


}

































