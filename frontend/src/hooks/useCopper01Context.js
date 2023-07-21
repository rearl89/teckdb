import { Copper01Context } from "../context/Copper01Context";
import { useContext } from "react";

export const useCopper01Context = () => {
    const context = useContext(Copper01Context)

    if (!context) {
        throw Error('useCopper01Context must be used inside an AnodeContextProvider')
    }

    return context
}