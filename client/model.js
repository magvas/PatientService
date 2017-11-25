function Patient(patid, first, last, gender) {
    this.patid = patid;
    this.firstname = first;
    this.lastname = last;
    this.gender = gender;

    this.generatePatId = function () {
        if (this.patid === "" || this.patid === null) {
            this.patid = this.lastname.substring(0,2) + this.firstname.substring(0,2) + this.gender;
        }
    };
}

module.exports.Patient = Patient;