import { createContext, useReducer } from "react";

export const WedgesContext = createContext()

export const wedgesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WEDGESS':
            return {
                wedgess: action.payload
            }
        case 'CREATE_WEDGES':
            return {
                wedgess: [action.payload, ...state.wedgess]
            }
        case 'DELETE_WEDGES':
            return {
                wedgess: state.wedgess.filter((s) => s._id !== action.payload._id) 
            }
        // modal code
        case "UPDATE_WEDGES":
            let updatedIndex = state.wedgess.findIndex(
                (wedges) => wedges._id === action.payload._id
            )
            if (updatedIndex === -1) {
                return state
            }
            const updatedWedgess = [ ...state.wedgess.slice(0, updatedIndex), action.payload, ...state.wedgess.slice(updatedIndex =1)]
            return {
                wedgess: updatedWedgess
            }
        default:
            return state
    }
}

export const WedgesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wedgesReducer, {
        wedgess: null
    })


    return (
        <WedgesContext.Provider value={{...state, dispatch}}>
            { children }
        </WedgesContext.Provider>
    )
}