function Patient(first, last, gender) {
    this.firstName = first;
    this.lastName = last;
    this.gender = gender;
} 



function getPatients(){    
    requestPatients(function(res){

        document.getElementById("outputList").innerHTML = "";

        for(var i = 0; i < res.length; i++){            
            var item = res[i].PATID + " - " + res[i].LASTNAME + ", " + res[i].FIRSTNAME + " (" + res[i].GENDER + ")";
            addListItem("outputList",item);
        }    
    });
}

function getOrders(){
    requestOrders(function(res){
        
        document.getElementById("outputList").innerHTML = "";

        for(var i = 0; i < res.length; i++){            
            var item = res[i].ORDERID + " | " + res[i].ORDERER + " | " + res[i].ORDERDATE + " | " + res[i].PRIORITY;
             addListItem("outputList",item);
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

function addPatient() {
    var newPatient = new Patient(document.getElementById("txtLastname").value,document.getElementById("txtFirstname").value,document.getElementById("txtGender").value);    

    var xhttp = new XMLHttpRequest();

    var orders;

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {            
            status(this.responseText);
            getPatients();
       }
    };

    var params = "?lastname=" + newPatient.lastName + "&firstname=" + newPatient.firstName + "&gender=" + newPatient.gender;
    xhttp.open("GET", "http://localhost:3000/savepatient" + params, true,);
    xhttp.send();
}

function showAddPatientDialog(){
    document.getElementById("patientInput").style.visibility = "visible";
}

function status(statusText){
    document.getElementById("txtStatus").innerHTML = statusText;
}

function addListItem(nameOfList,item) {     
    var outputList = document.getElementById(nameOfList);    
    var newItem = document.createElement("li");
    newItem.innerText = item;
    outputList.appendChild(newItem);

    // var listItem = document.createElement("a");
    //     listItem.setAttribute("href", "#");
    //     listItem.innerText = listItems[i].Fullname;
    //     _listScreen.appendChild(listItem);
}