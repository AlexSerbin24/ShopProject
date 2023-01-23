import ApiError from "../Exceptions/ApiError.js";
import TokenService from "../Service/TokenService.js";
export default function requireAuthMiddleware(req, res, next) {

    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.Unauthorized());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.Unauthorized())
        }

        const userData = TokenService.validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.Unauthorized())
        }

        req.user = userData;

        next();
    }
    catch (error) {
        next(error)
    }

}