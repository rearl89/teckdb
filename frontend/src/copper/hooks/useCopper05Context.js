import { Copper05Context } from "../context/Copper05Context";
import { useContext } from "react";

export const useCopper05Context = () => {
    const context = useContext(Copper05Context)

    if (!context) {
        throw Error('useCopper05Context must be used inside an AnodeContextProvider')
    }

    return context
}