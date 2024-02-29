import { createContext, useReducer } from "react";

export const Copper05Context = createContext();

export const copper05Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COPPER05S':
            return {
                copper05s: action.payload
            }
        case 'CREATE_COPPER05':
            return {
                copper05s: [action.payload, ...state.copper05s]
            }
        case 'DELETE_COPPER05':
            return {
                copper01s: state.copper05s.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Copper05ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(copper05Reducer, {
        copper05s: null
    })


    return (
        <Copper05Context.Provider value={{...state, dispatch}}>
            { children }
        </Copper05Context.Provider>
    )
}