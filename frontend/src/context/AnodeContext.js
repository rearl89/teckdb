import { createContext, useReducer } from "react";

export const AnodeContext = createContext()

export const copper01Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COPPER01':
            return {
                copper01: action.payload
            }
        case 'CREATE_COPPER01':
            return {
                copper01: action.payload, ...state.copper01
            }
        default:
            return state
    }
}

export const AnodeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(copper01Reducer, {
        copper01: null
    })


    return (
        <AnodeContext.Provider value={{state, dispatch}}>
            { children }
        </AnodeContext.Provider>
    )
}