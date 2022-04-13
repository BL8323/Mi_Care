const { default: authConstant } = require("../constants/authConstant")

export const authenticateAction = (data) => {
    return {
        type: authConstant.USER_AUTHENTICATE,
        payload: {
            token:data.jwt,
            refreshToken:data.refreshToken,
        },
    }
}

export const registerAction = (data) => {
    // TODO : check RESPONSE and modify payload
    return {
        type: authConstant.USER_REGISTER,
        payload: data,
    }
}

export const logoutAction = () => {
    return {
        type: authConstant.USER_LOGOUT,
    }
}
