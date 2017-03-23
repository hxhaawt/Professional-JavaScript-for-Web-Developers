/**
 * Created by hxh on 2017/3/15.
 */

window.onload = myFunction;

function myFunction() {

    /*
    var person = new Object();
    person.age = 28;
    person.name = "Richard";
    person.job = "software";
    person.sayName = function () {
        alert(this.name);
    }
    son.sayAge = function (){
        alert(this.age);
    }
    */
    /*
    var person = {
        age: 28,
        name: "Richard",
        job: "software",
        sayName: function () {
            document.writeln(this.name + " " + this.job);
        },
        sayAge: function () {
            document.writeln(this.age.toString());
        }
    };

    person.sayName();
    person.sayAge();
    */

    // // writeln 会在后面加入一个空格，rite 什么也不会加入
    // document.write("百度");
    // document.write("百度");
    // document.writeln("知道");
    // document.writeln("知道");
    // document.write("百度");

    /*
    var person = {};
    Object.defineProperty(person, "name", {
        writable: false,
        value: "Richard"
    });
    document.writeln(person.name);
    person.name = "jack";
    document.writeln(person.name);


    // 不能重复定义同一个属性，下面代码会出错
    Object.defineProperty(person, "name", {
        configurable: false,
        value: "vue"
    });
    document.writeln(person.name);  // 不会输出显示
    */

    /*
    // 定义多个属性
    var book = {};
    Object.defineProperties(book, {
        _year: {
            writable: true,
            value: 2004
        },
        edition: {
            writable: true,
            value: 1
        },
        year: {
            get: function () {
                return this._year;
            },

            set: function (newValue) {
                if (newValue > 2004){
                    this._year = newValue;
                    this.edition = newValue - 2004;
                }
            }
        }
    });

    document.writeln(book.year);
    book.year = 2006;
    document.writeln(book.year);
    document.writelnbook.edition);

    */


    /*
    // 工厂模式
    function createPerson(name, age, job) {
        var o = new Object();
        o.name = name;
        o.age  = age;
        o.job  = job;
        o.sayName = function () {
            alert(this.name);
       };
        return o;
    }
    var person1 = createPerson("jack", 25, "Software Engineer");
    var person2 = createPerson("lose", 25, "Web Engineer");

     document.writeln(person1.name + " " + person1.age + " " + person1.job);
     document.writeln("<br />" +person2.name + " " + person2.age + " " + person2.job);

    document.writeln("<br />" + (person1.constructor == createPerson));
    */

    /*
    // 构造函数模式
    function Person(name, age, job) {
        this.name = name;
        this.age  = age;
        this.job  = job;
        this.sayName = function () {
            alert(this.name);
        };
    }
    var person3 = new Person("jack", 25, "Software Engineer");
    var person4 = new Person("lose", 25, "Web Engineer");

    document.writeln(person3.name + " " + person3.age + " " + person3.job);
    document.writeln("<br />" + person4.name + " " + person4.age + " " + person4.job);

    document.writeln("<br /> <br />" + person3.constructor);
    document.writeln("<br />" + (person3.constructor == Person));

    document.writeln("<br />");
    document.writeln("<br />" + (person3 instanceof Person));
    document.writeln("<br />" + (person3 instanceof Object));
    document.writeln("<br />" + (person4 instanceof Person));
    document.writeln("<br />" + (person4 instanceof Object));
    */


    /*
    // 原型模式
    function Person() {

    }
    // Person.prototype.name = "Richard";
    // Person.prototype.age  = 28;
    // Person.prototype.job  = "Web";
    // Person.prototype.sayName = function () {
    //     document.writeln(this.name);
    // };
    // 更常用的写法
    Person.prototype = {
        name: "Richard",
        age: 28,
        job: "Web",
        sayName: function () {
            document.writeln(this.name);
        }
    };
    var person1 = new Person();
    var person2 = new Person();

    person1.name = "jack";
    document.writeln(person1.name); // "jack" 来自实例
    document.writeln(person2.name); // "Richard" 来自原型对象

    delete person1.name;    // 删除实例 name
    document.writeln(person1.name); // 显示原型对象
    document.writeln(person2.name);

    // 取得对象上 所有可以枚举的属性
    var keys = Object.keys(Person.prototype);
    document.writeln("<br />");
    document.writeln(keys);

    person1.name = "jack";
    document.writeln("<br />");
    document.writeln(Object.keys(person1));
    */

    /*
    // 组合 构造函数模式 和 原型模式
    function Person(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ["jack", "lose"];
    }
    Person.prototype = {
        constructor: Person,
        sayName: function () {
            alert(this.name);
        }
    };

    var person1 = new Person("one", 25, "Web");
    var person2 = new Person("two", 28, "Hardware");

    person1.friends.push("LiMing");

    document.writeln(person1.name + " friends: " + person1.friends);
    document.writeln("<br />");
    document.writeln(person2.friends);

    document.writeln("<br />");
    document.writeln(person1.friends == person2.friends);
    document.writeln(person1.sayName == person2.sayName);
    */







}










