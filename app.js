function serviceTest(){
    return "Service Response";
}

function getPatient(){
    return "Patient";
}

function getPatients(){
    var patients =[
        {"firstName":"Bert","lastName":"Backblech"},
        {"firstName":"Tom","lastName":"Ate"},
        {"firstName":"Peter","lastName":"Silie"}
    ];
    return patients;
}

function save(patient){
    return "Patient saved successful";
}

function remove(patient){
    return "Patient removed successful";
}

function update(patient){
    return "Patient updated successful";
}

// console.log(getPatients());

module.exports.getPatient = getPatient;
module.exports.remove = remove;