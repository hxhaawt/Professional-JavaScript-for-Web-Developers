/**
 * Created by hxh on 2017/3/30.
 */

window.onload = myTest;

function myTest() {

    /*
    var textBox = document.forms[0].elements['textbox1'];

    // textBox.addEventListener("focus", function (event) {
    //
    //     event.target.select();
    // } ,false);

    // textBox.addEventListener("select", function (event) {
    //     alert("text: " + textBox.value);
    // } ,false);


    textBox.addEventListener("keypress", function (event) {
        var charCode = event.charCode;  // 取得对应的数字编码如：1-->49

        //  console.log(charCode);
        // // // 将编码转换成字符串如将 1 的编码49转换成字符串'1'
        //  console.log(String.fromCharCode(charCode));
        //  console.log(/\d/.test(String.fromCharCode(charCode)));

        // 检测文本域中输入的只有数字，非数字不能输入，也不能复制/粘贴
        // charCode > 9 是为了可以在 firefox 上能操作上下左右按键
        //
        if (!/\d/.test(String.fromCharCode(charCode))  && (charCode > 9) &&
                !event.ctrlKey){
            event.preventDefault();
        }

    } ,false);


    // 还要应该加入检测文本域内容的操作，因为中文输入法也能输入非数字的字符
    EventUtil.addHandler(textBox, "change", function (event) {
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        // 有非数字输入，修改背景颜色提示
        if (/[^\d]/.test(target.value)){
            target.style.backgroundColor = "red";
        }
        else {
            target.style.backgroundColor = "";
        }
    });
    */


    var selectBox = document.forms[1].elements['location'];
    var text = selectBox.options[0].text;
    var value = selectBox.options[0].value;

    console.log(text);
    console.log(value);

    console.log(selectBox.options[2].text);
    console.log(selectBox.options[2].value);

    console.log(selectBox.options[3].text);
    console.log(selectBox.options[3].value);

    var btn = document.getElementById("btn");
    btn.addEventListener("click", function (event) {
        for (var i=0, len=selectBox.options.length; i<len; i++){
            selectBox.remove(0);
        }
    } ,false);



}





