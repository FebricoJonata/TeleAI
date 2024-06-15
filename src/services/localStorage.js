export const userLoginSession = {
    key: "user_login_session_token",
    setToken(token) {
        localStorage.setItem(this.key, token)
    },
    removeToken() {
        localStorage.removeItem(this.key);
    },
    getToken() {
        return localStorage.getItem(this.key);
    },
    isAuthorized() {
        return localStorage.getItem(this.key) !== null;
    }
}

export const userGeneralData = {
    keyPrefix: "user_general_data",
    keyId: "id",
    keyName: "name",
    keyEmail: "email",
    keyRole: "keyRole",
    setData({id, name, email, role}) {
        localStorage.setItem(`${this.keyPrefix}_${this.keyId}`, id)
        localStorage.setItem(`${this.keyPrefix}_${this.keyName}`, name)
        localStorage.setItem(`${this.keyPrefix}_${this.keyEmail}`, email)
        localStorage.setItem(`${this.keyPrefix}_${this.keyRole}`, role)
    },
    removeData() {
        localStorage.removeItem(`${this.keyPrefix}_${this.keyId}`)
        localStorage.removeItem(`${this.keyPrefix}_${this.keyName}`)
        localStorage.removeItem(`${this.keyPrefix}_${this.keyEmail}`)
        localStorage.removeItem(`${this.keyPrefix}_${this.keyRole}`)
    },
    getData() {
        return {
            id: localStorage.getItem(`${this.keyPrefix}_${this.keyId}`),
            name: localStorage.getItem(`${this.keyPrefix}_${this.keyName}`),
            email: localStorage.getItem(`${this.keyPrefix}_${this.keyEmail}`),
            role: localStorage.getItem(`${this.keyPrefix}_${this.keyRole}`)
        }
    },
    getId() {
        return localStorage.getItem(`${this.keyPrefix}_${this.keyId}`)
    },
    getName() {
        return localStorage.getItem(`${this.keyPrefix}_${this.keyName}`)
    },
    getEmail() {
        return localStorage.getItem(`${this.keyPrefix}_${this.keyEmail}`)
    },
    getRole() {
        return localStorage.getItem(`${this.keyPrefix}_${this.keyRole}`)
    }
}