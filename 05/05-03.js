/**
 * Created by hxh on 2017/3/9.
 */

window.onload = myTest;

function doSomething() {
    var j = 0;
    for (var i=0; i<100000; i++){
        j++;
        j++;
        j++;
    }
}
function myTest() {

    var now = new Date();
    var now2 = new Date("10/2/2016");

    document.write(now);
    document.write("</br>"+now2);

    // 用 UTC 小时自动加 8 Fri Feb 02 2018 18:20:13 GMT+0800 (中国标准时间)
    document.write("</br></br>"+ new Date(Date.UTC(2018, 1, 2, 10, 20, 13)));
    // Fri Feb 02 2018 10:20:13 GMT+0800 (中国标准时间)
    document.write("</br>"+ new Date(2018, 1, 2, 10, 20, 13));

    // Sat Feb 03 2018 10:01:00 GMT+0800 (中国标准时间)
    document.write("</br></br>"+ new Date(Date.UTC(2018, 1, 2, 25, 60, 60)));

    // 取得开始时间 不用 new
    var start = Date.now();

    doSomething();

    // 取得结束时间
    var stop = Date.now();
    // 显示运行时间
    document.write("</br>" + "Something runtime： " + (stop - start));



}
