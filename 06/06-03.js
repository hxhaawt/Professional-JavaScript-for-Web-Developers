/**
 * Created by hxh on 2017/3/17.
 */

window.onload = myFunction;

function myFunction() {


    /*
    function SuperType() {
        this.colors = ["red", "blue", "white"];
    }
    function SubType() {

    }

    SubType.prototype = new SuperType();

    var value1 = new SubType();
    value1.colors.push("green");
    alert(value1.colors);
    var value2 = new SubType();
    alert(value2.colors);

    var value3 = new SuperType();
    alert(value3.colors);

    */

    /*
    // 原型式继承
    function object(o) {
        function F() {}
        F.prototype =  o;
        return new F();
    }
    var person = {
        name: "one",
        friends: ["jack","lose"]
    };

    var person1 = object(person);
    document.writeln(person1.name);
    person1.name = "two";
    person1.friends.push("vue");
    document.writeln(person1.name);

    var person2 = object(person);
    document.writeln(person2.name);
    person2.name = "three";
    person2.friends.push("JQuery");
    document.writeln(person2.name);

    document.writeln(person.name);

    document.writeln("<br />");
    document.writeln(person.friends);
    document.writeln("<br />");
    document.writeln(person1.friends);
    document.writeln("<br />");
    document.writeln(person2.friends);
    */

    // 寄生组合式继承 基本模式如下所示
    function inheritPrototype(subType, superType) {
        var prototype = Object(superType.prototype);
        prototype.constructor = subType;
        subType.prototype = prototype;
    }
    function SuperType(name) {
        this.name = name;
        this.colors = ["red", "green", "blue"];
    }
    SuperType.prototype.sayName = function () {
        alert(this.name);
    };

    function SubType(name, age) {
        SuperType.call(this, name);
        this.age = age;
    }

    inheritPrototype(SubType, SuperType);

    SubType.prototype.sayAge = function () {
        alert(this.age);
    };
    var person1 = new SubType("jack", 28);
    document.writeln(person1.name);
    document.writeln(person1.age);
    document.writeln(person1.colors);
    person1.sayName();
    person1.sayAge();




}