import { createContext, useReducer } from "react";

export const Copper09Context = createContext();

export const copper09Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COPPER09S':
            return {
                copper09s: action.payload
            }
        case 'CREATE_COPPER09':
            return {
                copper09s: [action.payload, ...state.copper09s]
            }
        case 'DELETE_COPPER09':
            return {
                copper09s: state.copper09s.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Copper09ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(copper09Reducer, {
        copper09s: null
    })


    return (
        <Copper09Context.Provider value={{...state, dispatch}}>
            { children }
        </Copper09Context.Provider>
    )
}