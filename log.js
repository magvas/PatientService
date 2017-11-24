const log = (options) => {
    return (req,res,next) =>{
        console.log(`${Date()} - (${options.level}) - ${req.method} ${req.path}`);
        next();
    };
};

module.exports = log;