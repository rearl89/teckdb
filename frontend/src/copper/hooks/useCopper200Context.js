import { Copper200Context } from "../context/Copper200Context";
import { useContext } from "react";

export const useCopper200Context = () => {
    const context = useContext(Copper200Context)

    if (!context) {
        throw Error('useCopper200Context must be used inside an AnodeContextProvider')
    }

    return context
}