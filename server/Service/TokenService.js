import jsonwebtoken from "jsonwebtoken"
import Token from "../Models/Token.js";



class TokenService{
    generateAccessToken(user){
        const accessToken = jsonwebtoken.sign(user, process.env.JWT_SECRET_KEY,{expiresIn:"30m"});
        const refreshToken = jsonwebtoken.sign(user, process.env.JWT_REFRESH_SECRET_KEY ,{expiresIn:"30d"});
        return {accessToken, refreshToken};
    }

    async saveToken(userId, refreshToken){
        const tokenData = await Token.findOne({user:userId});
        if(tokenData){
            tokenData.refreshToken= refreshToken;
            return tokenData.save();
        }

        const token = Token.create({user:userId, refreshToken: refreshToken})

        return token;
    }

    async removeToken(token){
        const tokenData = await Token.deleteOne({token})
        return tokenData;
    }

    async findToken(token){
        const tokenData = await Token.findOne({token});
        return tokenData
    }

    getRoleByToken(){
        try {
            
        } catch (error) {
            
        }
    }

    validateAccessToken(accessToken){
        try {
            const userData  = jsonwebtoken.verify(accessToken, process.env.JWT_SECRET_KEY);
            return userData
        } catch (error) {
            return null;
        }
    }

    validateRefreshToken(refreshToken){
        try {
            const userData  = jsonwebtoken.verify(refreshToken, process.env.JWT_REFRESH_SECRET_KEY);
            return userData
        } catch (error) {
            return null;
        }
    }
}

export default new TokenService();