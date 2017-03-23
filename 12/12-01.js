/**
 * Created by hxh on 2017/3/23.
 */

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

addLoadEven(myFunction);


function myFunction() {

    alert("Hello");
}



