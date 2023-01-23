
import User from "../Models/User.js";
import  bcrypt from "bcrypt";
import TokenService from "./TokenService.js";
import UserDto from "../DTO/UserDto.js";
import Role from "../Models/Role.js";
import ApiError from "../Exceptions/ApiError.js";


class UserService {
    async registration(email, password) {
        const checkUser = await User.findOne({ email: email })
        (checkUser)
        if (checkUser) {

            throw  ApiError.BadRequest("User is already exists");
        }

        const hashedPassword = bcrypt.hashSync(password, 7);
        const role = await Role.findOne({ rolename: "USER" });

        const user = await User.create({ email: email, password: hashedPassword, roles: [role.rolename] });

        const userDto = new UserDto(user);
        const tokens = TokenService.generateAccessToken({...userDto});
        await TokenService.saveToken(userDto.id,tokens.refreshToken);

        return {...tokens, ...userDto}
    }


    async login(email, password){
        const user = await User.findOne({email: email});
            if(!user){
                throw ApiError.BadRequest("User doesn't exist")
            }

            const checkPassword = await bcrypt.compare(password, user.password);

            if(!checkPassword){
                throw ApiError.BadRequest('Password is not correct');
            }

            const userDto = new UserDto(user);
            
            const tokens = TokenService.generateAccessToken({...userDto});

            await TokenService.saveToken(userDto.id, tokens.refreshToken);

            return {...tokens, ...userDto}

    }

    async logout(refreshToken){
        const token = await TokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.Unauthorized();
        }

        const userData  = TokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await TokenService.findToken(refreshToken)

        if(!userData || !tokenFromDb){
            throw ApiError.Unauthorized();
        }

        const user = await User.findById(userData.id);

        const userDto = new UserDto(user);
            
        const tokens = TokenService.generateAccessToken({...userDto});

        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {...tokens, ...userDto}


    }





}

export default new UserService();