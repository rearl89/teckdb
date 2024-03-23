import { createContext, useReducer } from "react";

export const Cu200PureContext = createContext();

export const cu200PureReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CU200PURES':
            return {
                cu200Pures: action.payload
            }
        case 'CREATE_CU200PURE':
            return {
                cu200Pures: [action.payload, ...state.cu200Pures]
            }
        case 'DELETE_CU200PURE':
            return {
                cu200Pures: state.cu200Pures.filter((c) => c._id !== action.payload._id) 
            }
        default:
            return state
    }
}

export const Cu200PureContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cu200PureReducer, {
        cu200Pures: null
    })


    return (
        <Cu200PureContext.Provider value={{...state, dispatch}}>
            { children }
        </Cu200PureContext.Provider>
    )
}