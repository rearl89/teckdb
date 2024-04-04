import { Copper09Context } from "../context/Copper09Context";
import { useContext } from "react";

export const useCopper09Context = () => {
    const context = useContext(Copper09Context)

    if (!context) {
        throw Error('useCopper09Context must be used inside an AnodeContextProvider')
    }

    return context
}