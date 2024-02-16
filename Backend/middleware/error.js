const ErrorHandler = require("../utils/errorHandler");


module.exports=(err,req,res,next)=>{
    err.statusCode= err.statusCode||500;
    err.message=err.message||"Internal server error";
   
// Wrong Mongodb ID error
   if(err.name==="CastError"){
    const message=`Resource not found. Invalid: ${err.path}`;
    err=new ErrorHandler(message,400);
   }

//mongoose duplicate key error
 if(err.code === 11000){
    const message =`Duplicate ${Object.keys(err.keyValue)} Entered`;
    err=new ErrorHandler(message,400);
 }
}