import { createContext, useReducer } from "react";

export const Copper200Context = createContext();

export const copper200Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COPPER200S':
            return {
                copper200s: action.payload
            }
        case 'CREATE_COPPER200':
            return {
                copper200s: [action.payload, ...state.copper200s]
            }
        case 'DELETE_COPPER200':
            return {
                copper200s: state.copper200s.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Copper200ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(copper200Reducer, {
        copper200s: null
    })


    return (
        <Copper200Context.Provider value={{...state, dispatch}}>
            { children }
        </Copper200Context.Provider>
    )
}