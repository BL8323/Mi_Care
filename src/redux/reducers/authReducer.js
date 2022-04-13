import authConstant from "../constants/authConstant";

const initialState = {
    user: null,
    token: null,
    refreshToken: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authConstant.USER_AUTHENTICATE:
            return {
                ...state,
                ...action.payload,
            };
        case authConstant.USER_REGISTER:
            return {
                ...state,
                ...action.payload,
            };
        case authConstant.USER_LOGOUT:
            return initialState;

        default:
            return state;
    }
};