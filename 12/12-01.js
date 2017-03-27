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

    // var div1 = document.getElementById("div1");
    // div1.style.color = "red";
    // div1.style.border = "2px solid green";

    // var foo = function bar(){ return 12; };
    // typeof bar();

    // var myDiv = document.createElement('div');
    // for(var k in myDiv ){
    //     console.log(k)
    // }

}



