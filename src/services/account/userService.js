import User from "../../models/account/User";

export const fetchUserData = async () => {

}

export const isUserSignedIn = () => {
    return false;
}

export const SignIn = async (user) => {
    if (!user instanceof User) throw new Error("Invalid user model.")
}