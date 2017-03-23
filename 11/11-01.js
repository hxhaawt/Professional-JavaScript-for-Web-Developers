/**
 * Created by hxh on 2017/3/22.
 */

function addLoadEvent(func) {
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

// add event function to window.onload
addLoadEvent(myFunction);



function myFunction() {

    // var myId = document.getElementsByTagName("div");
    //
    // for (var i=0, len=myId[0].classList.length; i<len; i++){
    //     alert(myId[0].classList[i]);
    // }
    // document.writeln(document.charset);

    // var pTags = document.getElementsByTagName("div");
    //
    // pTags[0].insertAdjacentHTML("beforebegin", "<p> before begin </p>");
    // pTags[1].insertAdjacentHTML("afterbegin", "<p> after begin </p>");
    // pTags[2].insertAdjacentHTML("beforeend", "<p> before end </p>");
    // pTags[3].insertAdjacentHTML("afterend", "<p> after end </p>");

    // var div1 = document.getElementById("div1");
    // alert(div1.innerHTML);
    // alert(div1.innerText);

}










