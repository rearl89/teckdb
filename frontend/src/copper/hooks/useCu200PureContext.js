import { Cu200PureContext } from "../context/Cu200PureContext";
import { useContext } from "react";

export const useCu200PureContext = () => {
    const context = useContext(Cu200PureContext)

    if (!context) {
        throw Error('useCu200PureContext must be used inside an AnodeContextProvider')
    }

    return context
}