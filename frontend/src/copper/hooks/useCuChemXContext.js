import { CuChemXContext } from "../context/CuChemXContext";
import { useContext } from "react";

export const useCuChemXContext = () => {
    const context = useContext(CuChemXContext)

    if (!context) {
        throw Error('useCuChemXContext must be used inside an AnodeContextProvider')
    }

    return context
}