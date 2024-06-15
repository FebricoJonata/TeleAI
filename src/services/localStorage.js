export const userLoginSession = {
    key: "user_login_session_token",
    setToken(token) {
        if (token) {
            localStorage.setItem(this.key, token)
        } else {
            localStorage.removeItem(this.key);
        }
    },
    getToken() {
        return localStorage.getItem(this.key);
    },
    isAuthorized() {
        return localStorage.getItem(this.key) !== null;
    }
}