import { AnodeContext } from "../context/AnodeContext";
import { useContext } from "react";

export const useCopper01Context = () => {
    const context = useContext(AnodeContext)

    if (!context) {
        throw Error('useCopper01Context must be used inside an AnodeContextProvider')
    }

    return context
}