import { SnNexxContext } from "../context/SnNexxContext";
import { useContext } from "react";

export const useSnNexxContext = () => {
    const context = useContext(SnNexxContext)

    if (!context) {
        throw Error('useSnNexxContext must be used inside an SnNexxContextProvider')
    }

    return context
}