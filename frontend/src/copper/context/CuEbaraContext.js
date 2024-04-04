import { createContext, useReducer } from "react";

export const CuEbaraContext = createContext();

export const cuEbaraReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CUEbaraS':
            return {
                cuEbaras: action.payload
            }
        case 'CREATE_CUEbara':
            return {
                cuEbaras: [action.payload, ...state.cuEbaras]
            }
        case 'DELETE_CUEbara':
            return {
                cuEbaras: state.cuEbaras.filter((c) => c._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CuEbaraContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cuEbaraReducer, {
        cuEbaras: null
    })


    return (
        <CuEbaraContext.Provider value={{...state, dispatch}}>
            { children }
        </CuEbaraContext.Provider>
    )
}