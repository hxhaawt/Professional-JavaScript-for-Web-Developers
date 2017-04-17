/**
 * Created by hxh on 2017/4/17.
 */

// "use strict";

addLoadEven(myTest);

function myTest() {

    var data = [12, 123, 1234, 23, 234, 2345, 34, 345, 3456, 45, 456, 4567, 56, 567, 5678, 67, 678, 78];

    function printValue(item) {
        var div = document.getElementById("myDiv");
        div.innerHTML += item + "<br />";
    }

    chunk(data, printValue);


}

function chunk(array, process, context) {
    setTimeout(function () {
        var item = array.shift();
        process.call(context, item);

        if (array.length > 0){
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}









