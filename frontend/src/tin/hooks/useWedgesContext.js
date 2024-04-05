import { WedgesContext } from "../context/WedgesContext";
import { useContext } from "react";

export const useWedgesContext = () => {
    const context = useContext(WedgesContext)

    if (!context) {
        throw Error('useWedgesContext must be used inside an WedgesContextProvider')
    }

    return context
}