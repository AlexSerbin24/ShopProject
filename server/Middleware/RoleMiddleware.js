import ApiError from "../Exceptions/ApiError.js";
export default function roleMiddleware(roles) {
    return function (req, res, next) {
        try {

            const userData = req.user; 

            let isUserInRole = false;

            if (userData.roles.forEach(role => {
                if(roles.includes(role)){
                    isUserInRole = true;
                }
            }));

            if(!isUserInRole){
                return next(ApiError.Forbidden())
            }
            next()


        } catch (error) {
            return next(ApiError.Unauthorized())
        }
    }
}