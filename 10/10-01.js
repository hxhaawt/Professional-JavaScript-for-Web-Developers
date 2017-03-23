/**
 * Created by hxh on 2017/3/20.
 */

function addLoadEvent(func) {
    var oldOnLoad = window.onload;

    if (typeof window.onload != 'function'){
        window.onload = func;
    }else {
        window.onload = function () {
            oldOnLoad();
            func();
        };
    }
}

// add window.onload event
addLoadEvent(myFunction);

function myFunction() {
    //
    // var someNodes = document.getElementById("div1");

    // someNodes = someNodes.getElementsByTagName("*");
    // document.writeln(someNodes[0].innerHTML);
    // var retNode = someNodes.appendChild(someNodes.firstChild);
    //
    // alert(retNode === someNodes.firstChild);
    // alert(retNode === someNodes.lastChild);

    // document.writeln(someNodes.length);

    // document.writeln(document.title);
    // document.title = "Hello, DOM";

    // var pages = document.getElementsByTagName("p");
    // var page = pages.namedItem("myPage");
    // document.writeln(page.innerHTML);

    // var pages = document.getElementsByName("myPage");
    // document.writeln(pages.length);
    // document.writeln(pages[0].innerHTML);
    // document.writeln(pages[1].innerHTML);
    // document.writeln(document.getElementById("div1").tagName);
    // document.writeln("Hello");
    // console.log("Hello");
    // var nodeId = document.getElementById("div1").tagName.toLowerCase();
    // console.log(nodeId);
    // document.writeln(nodeId);
    // document.writeln("Hello");

    var nodeP = document.getElementsByTagName("p");
    for (var i=0; i<nodeP.length; i++){
        nodeP[i].onclick = function () {
            alert(this.firstChild.nodeValue);
            // this.innerHTML = 'anyone';
            // this.className = "divClass2";
        };

    }

    // nodeP.removeAttribute("class");
    // nodeP.onclick.removeAttribute("class");
}































