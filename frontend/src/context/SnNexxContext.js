import { createContext, useReducer } from "react";

export const SnNexxContext = createContext()

export const sn_nexxReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SN_NEXXS':
            return {
                sn_nexxs: action.payload
            }
        case 'CREATE_SN_NEXX':
            return {
                sn_nexxs: [action.payload, ...state.sn_nexxs]
            }
        case 'DELETE_SN_NEXX':
            return {
                sn_nexxs: state.sn_nexxs.filter((s) => s._id !== action.payload._id) 
            }
        // modal code
        case "UPDATE_SN_NEXX":
            let updatedIndex = state.sn_nexxs.findIndex(
                (sn_nexx) => sn_nexx._id === action.payload._id
            )
            if (updatedIndex === -1) {
                return state
            }
            const updatedSnNexxs = [ ...state.sn_nexxs.slice(0, updatedIndex), action.payload, ...state.sn_nexxs.slice(updatedIndex =1)]
            return {
                sn_nexxs: updatedSnNexxs
            }
        default:
            return state
    }
}

export const SnNexxContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sn_nexxReducer, {
        sn_nexxs: null
    })


    return (
        <SnNexxContext.Provider value={{...state, dispatch}}>
            { children }
        </SnNexxContext.Provider>
    )
}