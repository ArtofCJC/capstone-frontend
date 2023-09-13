import { createContext, useReducer } from "react";

export const AttractionsContext = createContext()

export const AttractionsReducer = (state, action) => {
switch (action.type) {
    case 'SET_ATTRACTIONS':
        return {
            attractions: action.payload
        }
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

