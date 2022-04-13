import moment from 'moment';
import { SET_DEFAULT_DATE, SET_SELECTED_DATE, SET_SELECTED_MONTH, SET_SELECTED_YEAR } from "../constants/calendarConstant";

const today = moment('01/01/2021', 'DD-MM-YYYY')

const initialState = {
    today,
    defaultDate: moment('01/01/2021', 'DD-MM-YYYY'),
    selectedDate: 18,
    selectedMonth: 0,
    selectedYear: 2021
}

// export const todayReducer = (initialState = state, action) => {
//     switch (action.payload) {
//         case GET_TODAY:
//             return {
//                 ...initialState,
//                 // today
//             }
//         // case SET_TODAY:
//         //     return {
//         //         ...initialState,
//         //         today: action.payload.value
//         //     }
//         default:
//             return initialState;
//     }
// }


export const calendarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_DATE:
            console.log('today action', action)
            return {
                ...state,
                defaultDate: action.payload
            }
        case SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }

        case SET_SELECTED_MONTH:
            return {
                ...state,
                selectedMonth: action.payload
            }
        case SET_SELECTED_YEAR:
            return {
                ...state,
                selectedYear: action.payload
            }
        default:
            return state;
    }
}