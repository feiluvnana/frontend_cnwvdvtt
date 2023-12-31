import ApiRoot from "./ApiRoot";

export default class AuthApi {
    async login(username, password) {
        return new ApiRoot().postRequestBase("/auth/login", {username, password});
    }

    async signUp(username, password, email) {
        let role = "user";
        return new ApiRoot().postRequestBase("/auth/signUp", {username, password, email, role});
    }

    async loginWithGG(data) {
       return await new ApiRoot().postRequestBase('/auth/login-with-gg',data);
    }

    async logout(refreshToken) {
        return await new ApiRoot().postRequestBase('/auth/logout', {refreshToken:refreshToken});
    }
}