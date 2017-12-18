var fs = require("fs");

function logger(){
    this.defaultLogDir = "c:\\tmp\\log\\";
    this.defaultLogFile = "patientservice.log";
    this.loggingText = "Hallo Welt!";
    
    this.info = (loggingText) => {
        this.loggingText = loggingText;
        console.log(this.loggingText);
        this.writeToLogfile(this.loggingText);
    };

    
    this.writeToLogfile = (loggingText) => {
        var logFilePath = this.defaultLogDir + "" + this.defaultLogFile;
        fs.appendFile(logFilePath, Date.now() + " - " + loggingText, (err) => {
            if (err) {
                throw err;
            }
        });
    };
}

module.exports.logger = logger;