/**
 * Created by hxh on 2017/4/7.
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

    // WebGL
    var buffer = new ArrayBuffer(20);
    var view = new DataView(buffer);

    view.setInt16(0, 20);
    view.setInt16(2, 15);
    console.log(view.getInt16(0), view.getInt16(2));
    console.log(view.getInt8(0), view.getInt8(1));
    console.log(view.getInt16(1), view.getInt16(3));
    console.log(view.getInt16(1), view.getInt16(2));
    console.log(view.getInt16(4), view.getInt16(6));
    console.log(view.getInt32(0), view.getInt16(6));

    console.log("======");
    var uint8s = new Uint8Array(10),
        subItem = uint8s.subarray(2, 5); // 2--3--4
    console.log(uint8s.byteLength, subItem.length);
    uint8s[2] = 11;
    uint8s[5] = 55;
    console.log(subItem[0], subItem[2]);

    var int16s = new Int16Array([10, 20, 30, 40, 50]);
    console.log(int16s.byteLength);
    console.log(int16s.length);

    // var string = "";
    // for (var i=283; i<310; i++){
    //     string = "http://player.iboav.com/media/videos/iphone/"+i+"/mp4/"+i+".mp4";
    //     document.write("<br/>" + string);
    // }

    var aTag = document.body.getElementsByTagName("a");
    alert(aTag.length);
    // alert(aTag[1].nodeType);
    // alert(aTag[2].nodeType);

    for (var i=0, len=aTag.length-1; i<len; i++){
        if (aTag[i].nodeType == 1){
            // document.writeln(aTag[i].href + "  " + aTag[i].innerHTML);
        }
    }
}










































