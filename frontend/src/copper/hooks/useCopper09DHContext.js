import { Copper09DHContext } from "../context/Copper09DHContext";
import { useContext } from "react";

export const useCopper09DHContext = () => {
    const context = useContext(Copper09DHContext)

    if (!context) {
        throw Error('useCopper09DHContext must be used inside an AnodeContextProvider')
    }

    return context
}