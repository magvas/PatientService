const logger = require("./common/logger");

const log = (options) => {
    return (req,res,next) =>{
        
        console.log(`${Date()} - (${options.level}) - ${req.method} ${req.path} - ${req.session.user}`);
        next();
    };
};

module.exports = log;