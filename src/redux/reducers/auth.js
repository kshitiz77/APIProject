import types from "../types";
import { setUserData, removeUserData, getUserData, signupUser } from "../../utils/utils";
const initialState = {
    userData: {},
}

const userStatus = (state = initialState, action) => {
    console.log(action.payload)
    switch (action.type) {
        case types.LOGIN:
            let data = action.payload;
            console.log('data', data)
            setUserData(data)
            return {
                // ...state.userData,
                userData: data
            }
        case types.USER_LOGOUT:
            removeUserData();
            return {
                userData: undefined
            }
        default: return state;
    }
}

export default userStatus
