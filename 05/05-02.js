/**
 * Created by hxh on 2017/3/1.
 */

window.onload = myTest;

function myTest() {

    var values = [0, 1, 2, 5, 10, 15];

    alert(values.reverse());    // 反转数组项的顺序 输出：15 10 5 2 1 0
    alert(values);  // 转换后数组内值的位置也会根着改变 也输出：15 10 5 2 1 0

    // 将数组值转换成字符串值，然后再比较  输出：0 1 10 15 2 5
    alert(values.sort());
    alert(values);  // 转换后数组内值的位置也会根着改变 也输出：0 1 10 15 2 5


}


