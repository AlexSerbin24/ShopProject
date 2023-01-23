
class UserDto{
    constructor(user) {
        this.id = user._id;
        this.email = user.email;
        this.roles = user.roles;
    }
}

export default UserDto