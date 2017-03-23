/**
 * Created by hxh on 2017/3/18.
 */

// 增加自处理 window.onload 函数
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

//
addLoadEvent(myFunction);

function myFunction() {

    // function createFunction() {
    //     var array = new Array();
    //     for (var i=0; i<10; i++){
    //         array[i] = function () {
    //           return i;
    //         };
    //     }
    //     return array;
    // }
    // var array1 = createFunction();
    // alert(array1[0]());
    // alert(array1[1]());


    /*
    // 可以正确返回结果的 闭包函数
    function createFunction() {
        var array = new Array();
        for (var i=0; i<10; i++){
            array[i] = function (num) {
              return function () {
                  return num;
              };
            }(i);
        }
        return array;
    }

    var array1 = createFunction();
    alert(array1[0]());
    alert(array1[1]());
    */

    /*
    function testFunction(count) {
        for (var i=0; i<count; i++){
            //
        }
        var i;
        alert(i);   // count
    }
    var testCount = testFunction(10);   // 10
    */

    // 块有作用域的写法
    (function () {

        var i = 0;
        function doSomething1() {
            i++;
            alert(i);
        }
        function doSomething2() {
            i++;
            alert(i);
        }

        alert(i);
    })();
    // alert(i);    // error


}





