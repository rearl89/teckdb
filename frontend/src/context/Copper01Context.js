import { createContext, useReducer } from "react";

export const Copper01Context = createContext();

export const copper01Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COPPER01S':
            return {
                copper01s: action.payload
            }
        case 'CREATE_COPPER01':
            return {
                copper01s: [action.payload, ...state.copper01s]
            }
        case 'DELETE_COPPER01':
            return {
                copper01s: state.copper01s.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Copper01ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(copper01Reducer, {
        copper01s: null
    })


    return (
        <Copper01Context.Provider value={{...state, dispatch}}>
            { children }
        </Copper01Context.Provider>
    )
}