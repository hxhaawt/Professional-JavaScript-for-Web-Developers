/**
 * Created by hxh on 2017/2/18.
 */

// var found = true;
// 如果 found 为 true则，Value没有定义也不会报错
// var result = (found || someValue);
// alert(result);
// alert(6/0);  // 返回无穷大 Infinity
// alert(0/0);     // 返回 NaN

// alert(0%0);
// alert(0%10);
// alert(10%0);
// alert(Infinity%0);
// alert(Infinity%10);
// alert(Infinity%Infinity);7u
// alert(10%Infinity);

window.onload = myTest;

function myTest() {

    // // 这种写法程序也会执行，程序只会执行第一个 匹配的 case 弹出 10-1
    // switch (10){
    //     case 10:
    //         alert("10-1");
    //         break;
    //
    //     case 10:
    //         alert("10-2");
    //         break;
    //
    //     case 15:
    //         alert("15");
    //         break;
    //
    //     default :
    //         break;
    // }

    // 用JavaScript将数字转换为大写金额
    var digitUppercase = function(n) {
        var fraction = ['角', '分'];
        var digit = [
            '零', '壹', '贰', '叁', '肆',
            '伍', '陆', '柒', '捌', '玖'
        ];
        var unit = [
            ['元', '万', '亿'],
            ['', '拾', '佰', '仟']
        ];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
            s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
            var p = '';
            for (var j = 0; j < unit[1].length && n > 0; j++) {
                p = digit[n % 10] + unit[1][j] + p;
                n = Math.floor(n / 10);
            }
            s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return head + s.replace(/(零.)*零元/, '元')
                .replace(/(零.)+/g, '零')
                .replace(/^整$/, '零元整');
    };

    // alert(digitUppercase(100.12));
    // alert(digitUppercase(45879123.02));
    // alert(digitUppercase(45698.00));
    // alert(digitUppercase(12));
    // alert(digitUppercase(1));
}




