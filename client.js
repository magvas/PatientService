function getPatients(){
    requestPatients(function(res){

        document.getElementById("output").innerHTML = "";

        for(var i = 0; i < res.length; i++){
            var oldContent = document.getElementById("output").innerHTML;
            document.getElementById("output").innerHTML = oldContent + res[i].PATID + " - " + res[i].LASTNAME + ", " + res[i].FIRSTNAME + " (" + res[i].GENDER + ")<br/>";
        }    
    });
}

function getOrders(){
    requestOrders(function(res){
        
        document.getElementById("output").innerHTML = "";

        for(var i = 0; i < res.length; i++){
            var oldContent = document.getElementById("output").innerHTML;
            document.getElementById("output").innerHTML = oldContent + res[i].ORDERID + " | " + res[i].ORDERER + " | " + res[i].ORDERDATE + " | " + res[i].PRIORITY + " |<br/>";
        }    
    });
}

function requestPatients(callback) {
    var xhttp = new XMLHttpRequest();

    var patients;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            patients = JSON.parse(this.responseText);
            callback(patients);
       }
    };


    xhttp.open("GET", "http://localhost:3000/patients", true);
    xhttp.send();
}

function requestOrders(callback) {
    var xhttp = new XMLHttpRequest();

    var orders;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            orders = JSON.parse(this.responseText);
            callback(orders);
       }
    };


    xhttp.open("GET", "http://localhost:3000/orders", true);
    xhttp.send();
}
