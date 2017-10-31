(async function () {

    var d = await ((await fetch("http://localhost:8080/data/TestDataJock.json")).json());

    for (var index = 0; index < d.LOCAL_BR_INFO.length; index++) {
        var element = d.LOCAL_BR_INFO[index];

        // direkte DOM manipulaiton?? Brug jQuery
        var tr = document.createElement("tr");
        var a = document.createAttribute("data-rgaid");
        a.value = d.LOCAL_BR_INFO[index].BR_ID;
        tr.setAttributeNode(a);

        var td = document.createElement("td");
        td.classList.add("nw");
        td.innerHTML = d.LOCAL_BR_INFO[index].BR_OWNER;
        tr.appendChild(td);

        var td = document.createElement("td");
        td.innerHTML = d.LOCAL_BR_INFO[index].BR_TEXT;
        tr.appendChild(td);

        var td = document.createElement("td");
        td.innerHTML = d.LOCAL_BR_INFO[index].BR_SIGNATURE;
        td.classList.add("nw");
        tr.appendChild(td);

        var td = document.createElement("td");
        var b = document.createElement("button");
        b.classList.add("btn");
        b.classList.add("btn-sm");

        if (d.LOCAL_BR_INFO[index].BR_SIGNATURE == undefined || d.LOCAL_BR_INFO[index].BR_SIGNATURE == "") { } else {
            b.setAttribute("disabled", "disabled");
        }

        var a = document.createAttribute("data-rgaid");
        a.value = d.LOCAL_BR_INFO[index].BR_ID;
        b.setAttributeNode(a);

        b.onclick = function () {
            var id = this.getAttribute("data-rgaid");
            this.setAttribute("disabled", "disabled");
        };

        b.innerHTML = "Godkend";
        td.appendChild(b);
        tr.appendChild(td);

        document.getElementById("tb").appendChild(tr);

    }
})();