/**
 * Created by hxh on 2017/4/16.
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
addLoadEven(myTest);

function myTest() {
    // var person = {
    //     name: "richard",
    //     age: 28
    // };
    // var arr = [1, 2];
    //
    // alert(person.toString());
    // alert(Object.prototype.toString.call(arr));

    var person = {
        name: "richard"
    };
    console.log(Object.isExtensible(person));
    console.log(Object.isSealed(person));

    // sealed object
    Object.seal(person);

    console.log(Object.isExtensible(person));
    console.log(Object.isSealed(person));

    person.age = 28;
    console.log(person.age);

    delete person.name;
    console.log(person.name);

}

















