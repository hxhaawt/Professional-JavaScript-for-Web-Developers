/**
 * Created by hxh on 2017/3/14.
 */

window.onload = myFunction;

function myFunction() {

    // function sum(num1, num2) {
    //     return num1 + num2;
    // }
    // alert(sum(1,2));
    //
    // var anotherSum = sum;
    // alert(anotherSum(1,2));
    //
    // sum = null;
    // alert(anotherSum(1,2));

    /*
    // 函数名是变量，所以函数也可以作为值来使用
    // 也就是可以将函数作为参数，也可以作为返回值
    function clSomeFunction(someFunction, arg){
        return someFunction(arg);
    }

    function add10(arg) {
        return (arg + 10);
    }
    alert(callSomeFunction(add10, 20));

    function getGreeting(name) {
        return "Hello, " + name;
    }

    alert(callSomeFunction(getGreeting, "Richard"));
    */

    /*
    function createComparisonFunction(propertyName) {
        return function (obj1, obj2) {
            var value1 = obj1[propertyName];
            var value2 = obj2[propertyName];

            if (value1 < value2){
                return -1;
            } else if (value1 > value2){
                return 1;
            }else {
                return 0;
            }
        };
    }
    var data = [{name: "cc", age: 29}, {name: "bb", age: 28}, {name: "aa", age: 30}];

    // 用数组自身的方法排序，没有显示效果
    data.sort();
    alert(data[0].name);

    // 按名字来排序
    data.sort(createComparisonFunction("name"));
    alert(data[0].name);

    // 按年龄来排序
    data.sort(createComparisonFunction("age"));
    alert(data[0].name);
    */

    var falseObject = new Boolean(false);
    // 布尔表达式中的所有对象都会转换成 true
    var result = falseObject && true;
    document.writeln(result);   // true
    document.writeln(falseObject.toString());   // false
    document.writeln(falseObject.valueOf());   // false
    document.writeln(falseObject.toLocaleString());   // false

    var falseValue = false;
    result = falseValue && true;
    document.writeln("<br />"+result);  // false

    document.writeln("<br />"+ typeof falseObject);  // object
    document.writeln("<br />"+ typeof falseValue);  // boolean

    document.writeln("<br />"+ (falseObject instanceof Boolean));  // true
    document.writeln("<br />"+ (falseValue instanceof Boolean));  // false

    // Number
    var numberObject = new Number(10);

    document.writeln("<br /> <br />"+ (numberObject instanceof Number));  //  true
    document.writeln("<br />"+ numberObject.toString() );  //  "10"
    document.writeln("<br />"+ numberObject.toString(2) );  //  "1010"
    document.writeln("<br />"+ numberObject.toString(8) );  //  "12"
    document.writeln("<br />"+ numberObject.toString(16) );  //  "a"

    // 带小数点显示方法
    document.writeln("<br />"+ numberObject.toFixed() );  // 10
    document.writeln("<br />"+ numberObject.toFixed(1) );  // 10.0
    // 指数显示方法
    document.writeln("<br />"+ numberObject.toExponential(1) );  // 1.0e+1
    document.writeln("<br />"+ numberObject.toExponential(2) );  // 1.00e+1

    // String
    var stringName1 = "华仔";
    var stringName2 = "jack";

    // 双字节字符 仍然算 1 个字符 显示：2
    document.write("<br /> <br />"+ stringName1.length);
    document.writeln("<br />"+ stringName2.length); // 4

    var stringValue = "hello, world!";
    var st1 = stringValue.charAt(1);    // "e" string类型
    var st2 = stringValue.charCodeAt(1);    // 101 number 类型

    document.writeln("<br /> <br />" + st1 +"  " + typeof st1); // "e" string
    document.writeln("<br />" + st2 + "  " + typeof st2);   // 101 number
   document.writeln("<br />" + stringValue[1]);    // e

    // 查找匹配的 子字符串
    var sourceString = "this is a good day, is beautiful, is good.";
    var indexStore = [];
    var findString = "is";
    var post = sourceString.indexOf(findString);
    while (post > -1){
        indexStore.push(post);
        post = sourceString.indexOf(findString, post + 1);
    }
    document.writeln("<br/>" + indexStore);

    var text = "cat, bat, sat";
    document.writeln("<br/> <br/>" + text.replace("at", "ond"));
    document.writeln("<br/>" + text);
    document.writeln("<br/>" + text.replace(/.at/g, "ond ($1)"));
    document.writeln("<br/>" + text.replace(/(.)at/g, "ond ($1)"));
    document.writeln("<br/>" + text.replace(/(.)at/g, "ond ($2)"));


}










