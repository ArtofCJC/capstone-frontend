import { createContext, useReducer } from "react";

export const AttractionsContext = createContext()

export const AttractionsReducer = (state, action) => {
switch (action.type) {
    case 'SET_ATTRACTIONS':
        return {
            attractions: action.payload
        }
        case 'CREATE_ATTRACTION':
            return {
                attractions: [action.payload, ...state.workouts]
            }
            // case 'DELETE_ATTRACTION':
            //     return {
            //         workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            //     }
            default:
                return state
    }
}

export const AttractionsContextProvider = ({children}) => {

const [state, dispatch] = useReducer(AttractionsReducer, {
    attractions: null
})



    return (
        <AttractionsContext.Provider value={{...state, dispatch}}>
            { children }
        </AttractionsContext.Provider>
    )
}

