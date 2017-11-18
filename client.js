function getPatients(){    
    showOutput(true);
    requestPatients(function(res){

        document.getElementById("outputList").innerHTML = "";

        for(var i = 0; i < res.length; i++){            
            var item = res[i].patid + " - " + res[i].lastname + ", " + res[i].firstname + " (" + res[i].gender + ")";
            addListItem("outputList",item);
        }    
    });
}

function getOrders(){
    showOutput(true);
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
            var patientsList = [];                    
            for(var i = 0; i < patients.length; i++){        
                var patient = new Patient(patients[i].patid,patients[i].firstname,patients[i].lastname,patients[i].gender);                    
                patientsList.push(patient);
            } 

            callback(patientsList);
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
            resetInputForm();
       }
    };

    var params = "?lastname=" + newPatient.lastName + "&firstname=" + newPatient.firstName + "&gender=" + newPatient.gender;
    xhttp.open("GET", "http://localhost:3000/savepatient" + params, true,);
    xhttp.send();
}

function showAddPatientDialog(visible){
    showOutput(false);

    if (visible == true) {
        document.getElementById("patientInput").style.visibility = "visible";
    } else {
        document.getElementById("patientInput").style.visibility = "hidden";
    }
    
}

function showOutput(visible){
    if (visible == true) {
        document.getElementById("output").style.visibility = "visible";
    } else {
        document.getElementById("output").style.visibility = "hidden";
    }
    
}

function status(statusText){
    document.getElementById("txtStatus").innerHTML = statusText;
}

function addListItem(nameOfList,item) {     
    var outputList = document.getElementById(nameOfList);    
    var newItem = document.createElement("li");
    newItem.innerText = item;
    outputList.appendChild(newItem);
}

function resetInputForm(){
    document.getElementById("txtFirstname").value = '';
    document.getElementById("txtLastname").value = '';
    document.getElementById("txtGender").value = '';
}

module.exports.remove = remove;