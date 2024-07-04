import  config  from "../config/config.js";
import winston from "winston";
const loggingCofig = {
  development: [
    new winston.transports.Console({ level: "debug" }),
    new winston.transports.File({ filename: "./logs.log", level: "info" }),
  ],
  production: [
    new winston.transports.Console({ level: "http" }),
    new winston.transports.File({ filename: "./warning.log", level: "warn" }),
  ],
};

const addLogger=(req,res,next)=>{
req.logger= winston.createLogger({
    transports: loggingCofig[config.app.ENV],
})
req.logger.http(`${req.method} at ${req.url} - ${new Date().toLocaleDateString()}`);
next()
}

export default addLogger;
