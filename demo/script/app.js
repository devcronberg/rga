(function danui() {
    document.getElementById("minP").innerHTML = "Dette kommer fra js " + new Date();

    document.getElementById("i1").onclick = function () {
        document.getElementById("i1").style.color = "green";
    };

    for (var index = 1; index < 50; index++) {

        var k = document.createElement("input");
        console.log(index, k);
        k.setAttribute("type", "button");
        k.setAttribute("value", "knap " + index);
        document.getElementById("minDiv").appendChild(k);

    }

})();

// var data =     [
//     {
//         "appId": 1,
//         "name": "xxxx",
//         "owner": "yyy",
//         "rules": [
//             {
//                 "signature": "xx",
//                 "text": "sdf"
//             },
//             {
//                 "signature": "xx",
//                 "text": "sdf"
//             }            
//         ]
//     },
//     {
//         "appId": 2,
//         "name": "xxxx",
//         "owner": "yyy",
//         "rules": [
//             {
//                 "signature": "xx",
//                 "text": "sdf"
//             },
//             {
//                 "signature": "xx",
//                 "text": "sdf"
//             }            
//         ]
//     }
// ];

//console.log(data);