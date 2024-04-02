import { createContext, useReducer } from "react";

export const Copper09DHContext = createContext();

export const copper09DHReducer = (state, action) => {
    switch (action.type) {
        case 'SET_COPPER09DHS':
            return {
                copper09DHs: action.payload
            }
        case 'CREATE_COPPER09DH':
            return {
                copper09DHs: [action.payload, ...state.copper09DHs]
            }
        case 'DELETE_COPPER09DH':
            return {
                copper09DHs: state.copper09DHs.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Copper09DHContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(copper09DHReducer, {
        copper09DHs: null
    })


    return (
        <Copper09DHContext.Provider value={{...state, dispatch}}>
            { children }
        </Copper09DHContext.Provider>
    )
}