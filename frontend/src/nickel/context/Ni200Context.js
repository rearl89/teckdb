import { createContext, useReducer } from "react";

export const Ni200Context = createContext();

export const ni200Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NI200S':
            return {
                ni200s: action.payload
            }
        case 'CREATE_NI200':
            return {
                ni200s: [action.payload, ...state.ni200s]
            }
        case 'DELETE_NI200':
            return {
                ni200s: state.ni200s.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Ni200ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ni200Reducer, {
        ni200s: null
    })


    return (
        <Ni200Context.Provider value={{...state, dispatch}}>
            { children }
        </Ni200Context.Provider>
    )
}