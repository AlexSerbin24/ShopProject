class ApiError extends Error{
    constructor(message, status, errors =[]) {
        super(message);
        this.status = status;
        this.errors = errors
    }

    static Unauthorized(){
        return new ApiError("User is unauthorized", 401);
    }

    static BadRequest(message, errors=[]){
        return new ApiError(message,400, errors)
    }

    static Forbidden(){
        return new ApiError("Access denied", 403);
    }
}

export default ApiError;