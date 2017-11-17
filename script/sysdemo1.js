(function () {

    var data = [];

    $("#lstObjNavn").change(function(){
        var on = $(this).val();

        var nData = data.LOCAL_BR_INFO.filter(function(v){
            if(v.ObjectName===on)
                return true;
        });
        newData = {};
        newData.LOCAL_BR_INFO = nData;
        createTbl(newData);
        
        
    });

    $.getJSON("http://localhost:8080/data/TestDataJock.json", {}, function (d) {


        data = d;
        createSelect(data);
        createTbl(data);

        


        //$('#tbl').DataTable();


    });

    function createSelect(d) {
        var sign = [];
        for (var index = 0; index < d.LOCAL_BR_INFO.length; index++) {
            var element = d.LOCAL_BR_INFO[index];
            if (sign.indexOf(d.LOCAL_BR_INFO[index].ObjectName) === -1) {
                sign.push(d.LOCAL_BR_INFO[index].ObjectName);
            }
        }
        for (let i = 0; i < sign.length; i++) {
            var o = $("<option />").html(sign[i]).val(sign[i]);
            $("#lstObjNavn").append(o);
            
        }
    }

    function createTbl(d) {
        $("#tbl").empty();
        for (var index = 0; index < d.LOCAL_BR_INFO.length; index++) {
            var element = d.LOCAL_BR_INFO[index];

            var tr = $("<tr />").attr("data-rgaid", d.LOCAL_BR_INFO[index].BR_ID);
            var td = $("<td />").addClass("nw").html(d.LOCAL_BR_INFO[index].BR_OWNER);
            tr.append(td);

            var td = $("<td />").html(d.LOCAL_BR_INFO[index].BR_TEXT);
            td.attr("title", "*****");
            tr.append(td);

            var td = $("<td />").addClass("nw").html(d.LOCAL_BR_INFO[index].BR_SIGNATURE);
            tr.append(td);

            var td = $("<td />");
            var b = $("<button />").addClass("btn btn-sm").html("Godkend").attr("data-rgaid", d.LOCAL_BR_INFO[index].BR_ID);


            if (d.LOCAL_BR_INFO[index].BR_SIGNATURE == undefined || d.LOCAL_BR_INFO[index].BR_SIGNATURE == "") { } else {
                b.attr("disabled", "disabled");
            }

            td.append(b);
            tr.append(td);

            var td = $("<td />").html(d.LOCAL_BR_INFO[index].ObjectName);
            td.hide();
            tr.append(td);

            b.click(function () {
                var id = $(this).attr("data-rgaid");
                console.log(id);
                $(this).attr("disabled", "disabled");
            });

            $("#tbl").append(tr);


        }

    }

})();