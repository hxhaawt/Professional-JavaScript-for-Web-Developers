/**
 * Created by hxh on 2017/4/14.
 */
window.onload = myTest;

function myTest() {
    var book1 = {
        "title": "professional javascript",
        "author": ["Nicholas C. Zakas"],
        edition: 3,
        year: 2011,
        toJSON: function () {
            return this.title;
        }
    };

    var jsonText1 = JSON.stringify(book1);
    var jsonText1_2 = JSON.stringify(book1, ["author"]);
    var jsonText1_3 = JSON.stringify(book1, function (key, value) {
        switch (key){
            case "title":
                // return value;
                return "test string";

            case "edition":
                return undefined;

            default:
                return value;
        }
    });
    console.log(jsonText1);
    console.log(jsonText1_2);
    console.log(jsonText1_3);


    var book2 = {
        "title": "professional javascript",
        "author": ["Nicholas C. Zakas"],
        edition: 3,
        year: 2011
        // toJSON: function () {
        //     return this.title;
        // }
    };
    var jsonText2 = JSON.stringify(book2);
    var jsonText2_2 = JSON.stringify(book2, ["author"]);
    var jsonText2_3 = JSON.stringify(book2, function (key, value) {
        switch (key){
            case "title":
                // return value;
                return "test string";

            case "edition":
                return undefined;

            default:
                return value;
        }
    });

    var jsonText2_4 = JSON.stringify(book2, null, 4);
    var jsonText2_5 = JSON.stringify(book2, null, "--");
    var jsonText2_6 = JSON.stringify(book2, null, "++--");

    console.log(jsonText2);
    console.log(jsonText2_2);
    console.log(jsonText2_3);
    console.log(jsonText2_4);
    console.log(jsonText2_5);
    console.log(jsonText2_6);


    // var message = {
    //     time: new Date()
    // };
    // document.writeln(message.time);

}