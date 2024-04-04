import { CuEbaraContext } from "../context/CuEbaraContext";
import { useContext } from "react";

export const useCuEbaraContext = () => {
    const context = useContext(CuEbaraContext)

    if (!context) {
        throw Error('useCuEbaraContext must be used inside an AnodeContextProvider')
    }

    return context
}