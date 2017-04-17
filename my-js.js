/**
 * Created by hxh on 2017/4/17.
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



