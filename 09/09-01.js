/**
 * Created by hxh on 2017/3/19.
 */

function addLoadEvent(func) {
    var oldOnLoad = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func;
    }else {
        window.onload = function () {
            oldOnLoad();
            func();
        }
    }
}

addLoadEvent(myFunction);

function myFunction() {

    /*
    function Person() {
        this.name = "jack";
        this.age = 26;
    }
    Person.prototype.sayAge = function () {
        document.writeln(this.age);
    };

    var person1 = new Person();

    document.writeln(person1.name);
    document.writeln(person1['name']);

    person1['sayAge']();
    person1.sayAge();

    */

    /*
    var hasEnum = function () {

        var o = {toString: function () {}};
        var count = 0;

        for (var prop in o){
            if (prop == 'toString'){
                count++;
            }
        }
        // return count;
        return (count > 1);
    }();

    document.writeln(hasEnum);
    */

    /*
    // 返回的是单个 变量
    var myObject = function () {

        var person = {
            name: "jack",
            age: 25,
            job: "Web"
        };
        return person;
    }();
    document.writeln(myObject.name);
    document.writeln(myObject.age);
    document.writeln(myObject.job);
    */

    /*
    // 返回的是 对象
    var myObject = function () {

        var person = {
            name: "jack",
            age: "26",
            job: "Web"
        };
        return {
            obj: person
        };
    }();
    document.writeln(myObject.obj.name);
    document.writeln(myObject.obj.age);
    document.writeln(myObject.obj.job);
    */
    document.writeln(navigator.platform);

}

















