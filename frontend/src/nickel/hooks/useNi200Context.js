import { Ni200Context } from "../context/Ni200Context";
import { useContext } from "react";

export const useNi200Context = () => {
    const context = useContext(Ni200Context)

    if (!context) {
        throw Error('useNi200Context must be used inside an AnodeContextProvider')
    }

    return context
}