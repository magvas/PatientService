function Patient(patid, first, last, gender, birthday) {
    this.patid = patid;
    this.firstname = first;
    this.lastname = last;
    this.gender = gender;
    this.birthday = birthday;

    this.generatePatId = function () {
        if (this.patid === "" || this.patid === null) {
            this.patid = this.lastname.substring(0,1) + this.firstname.substring(0,1) + this.birthday.replace(/-/g,"") + this.gender;
        }
    };
}

module.exports.Patient = Patient;