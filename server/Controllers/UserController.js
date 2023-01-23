import UserService from "../Service/UserService.js";




class UserController {
    async registration(req, res, next) {
        try {
            const { email, password } = req.body;

            const result =  await UserService.registration(email, password);

            res.cookie('refreshToken', result.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly:true});

            return res.json(result);
        }
        catch (error) {
            next(error)
        }
    }


    async login(req, res, next) {
        try {
            const  {email, password} = req.body;

            const result = await UserService.login(email,password);

            res.cookie('refreshToken', result.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly:true});

            return res.json(result);

        }
        catch (error) {
            next(error);
            // return res.status(error.status).send({message:error.message});

            // return res.status(400).send({message:"test"});
        }
    }

    async logout(req,res, next){
        try {
            const {refreshToken} = req.cookies;
            await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');

            return res.sendStatus(200);

        } catch (error) {
            next(error)
        }
    }

    async refresh(req,res, next){
        try {
            const {refreshToken} = req.cookies;
            
            const result = await UserService.refresh(refreshToken);

            res.cookie('refreshToken', result.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly:true});

            return res.json(result);
            
        } catch (error) {
            next(error)
        }
    }
}

export default new UserController();