/**
 * Created by hxh on 2017/3/19.
 */

// 增加自处理 window.onload 函数
function addLoadEvent(func) {

    var OldOnLoad = window.onload;

    if (typeof window.onload != "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            OldOnLoad();
            func();
        }
    }
}

addLoadEvent(myFunction);

function myFunction() {

    /*
    var pageWidth  = window.innerWidth;
    var pageHeight = window.innerHeight;

    if (typeof pageWidth != "number"){
        document.writeln("Hi");
        if (document.compatMode == "CSS1Compat"){
            pageWidth  = document.documentElement.clientWidth;
            pageHeight = document.documentElement.clientHeight;
        }
        else {
            pageWidth  = document.body.clientWidth;
            pageHeight = document.body.clientHeight;
        }
    }

    document.writeln(pageWidth);
    document.writeln(pageHeight);
    */

    /*
    var blocked = false;
    try{
        var newWin = window.open("/07/07-02.html", "_blank");
        // 浏览器阻止
        if (nein == null){
            blocked = true;
            document.writeln("浏览器阻止弹窗");
        }
    }catch (ex) {
        // 浏览器扩展或者其他程序阻止
        blocked = true;
        document.writeln("浏览器扩展或者其他程序阻止弹窗");
    }
    */

    /*

    // 超时调用  字符串的方式
    setTimeout("alert('Hi, man1')", 1000);

    // 尽量用函数的方式
    var timeId = setTimeout(function () {
        alert("Hi, man2");
    }, 2000);
    // clear setTimeout event
    clearTimeout(timeId);
    */

    /*
    // 间歇调用--重复执行代码
    // setInterval(function () {
    //     alert("Hello, World!");
    // },1000);

    var count = 0;
    var intervalId = null;
    function test1() {
        count++;
        if (count == 5){
            clearInterval(intervalId);
        }
        alert("Hi");
    }
    intervalId = setInterval(test1, 500);
    */

    /*
    var result = prompt("What is your name?", "jack");
    // 检测用户输入，没有输入则为null
    if (result != null){

        // 返回 true/ false
        var resultFlag = confirm("Welcome " + result);
        // 弹出返回标志
        alert(resultFlag);
    }
    */

    /*
    var qs = location.search.substring(1);
    var args = {};
    var items = null;
    var name = null, value = null;

    items = qs.split("=");
    name = decodeURIComponent(items[0]);
    value = decodeURIComponent(items[1]);
    args[name] = value;
    document.writeln(args[name]);
    */

    // location.href = "http://www.baidu.com";
    // location.assign("http://www.taobao.com");
    // location.replace("http://www.baidu.com");

    document.writeln(navigator.appCodeName);
    document.writeln(navigator.appName);
    document.writeln(navigator.appVersion);

    document.writeln("<br />" + history.length);


}













