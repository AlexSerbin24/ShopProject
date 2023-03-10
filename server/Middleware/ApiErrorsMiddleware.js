import ApiError from "../Exceptions/ApiError.js";

export default function (err, req,res, next){

    if(err instanceof ApiError){
        return res.status(err.status).send({message:err.message, errors:err.errors});
    }
    return res.status(500).send({message:"Unknown error"})
}