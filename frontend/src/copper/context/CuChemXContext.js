import { createContext, useReducer } from "react";

export const CuChemXContext = createContext();

export const cuChemXReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CUCHEMXS':
            return {
                cuChemXs: action.payload
            }
        case 'CREATE_CUCHEMX':
            return {
                cuChemXs: [action.payload, ...state.cuChemXs]
            }
        case 'DELETE_CUCHEMX':
            return {
                cuChemXs: state.cuChemXs.filter((c) => c._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const CuChemXContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cuChemXReducer, {
        cuChemXs: null
    })


    return (
        <CuChemXContext.Provider value={{...state, dispatch}}>
            { children }
        </CuChemXContext.Provider>
    )
}