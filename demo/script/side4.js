"use strict";

(function () {



    // var t = [];
    // t[0] = "ælskdælfk";
    // t[1] = 66100;
    // console.log(t.length);

    // for (let index = 0; index < t.length; index++) {

    //     console.log(t[index]);

    // }


    var p1 = new Object();
    p1["navn"] = "Mikkel";
    p1["alder"] = 10;
    p1["skriv"] = function(){
        console.log("Jeg hedder " + this["navn"]);
    };
    console.log(p1);
    p1["skriv"]();

    var p2 = {}; //new Object();
    p2.navn = "Mikkel";
    p2.alder = 10;
    p2.skriv = function(){
        console.log("Jeg hedder "+this.navn);
    }
    console.log(p2);
    p2.skriv();
    
    var p3  = {
        navn: "Mikkel",
        alder: 10,
        skriv: function(){
            console.log("Jeg hedder "+this.navn);            
        }
    };

    var json = JSON.stringify(p3);
    console.log(json);
    var p5 = JSON.parse(json);
    console.log(p5);

    
    console.log(p3);
    p3.skriv();

    var ao = [p1, p2, p3, {
        navn: "Mikkel",
        alder: 10,
        skriv: function(){
            console.log("Jeg hedder "+this.navn);            
        }
    }];

    
    console.log(ao);


    // skriva({
    //     navn: "Mikkel",
    //     alder: 10,
    //     skriv: function(){
    //         console.log("Jeg hedder "+this.navn);            
    //     }
    // });

    function test(a=1,b=2,c=3){
        console.log(arguments[4], a,b,c)
    }
    
    test("a","b","c","d","e");
    test("a","b","c","d");    
    test("a","b","c");
    test("a","b");
    test("a");
    test();





    var a = [4, 7, 1, 9, 10, 4];
    console.log(a);
    a.sort();
    console.log(a);
    //a.sort(s);
    a.sort(function (a, b) {
        if (a > b)
            return 1;
        if (b > a)
            return -1;
        return 0;
    });

    // a.sort((a, b) => a > b);
    console.log(a);

    // function s(a, b) {
    //     if (a > b)
    //         return 1;
    //     if (b > a)
    //         return -1;
    //     return 0;

    // }


    try {
        
        var b = a.filter(function (v, i, t) {
            if (v > 5)
            return true;
            else
            return false;
        });
        var t = new Object();
        t.ytrf();
        console.log(a,b);
    } catch (e) {
        console.log("*****" + e.message);
    }


})();

