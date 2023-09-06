import { AttractionsContext } from "../context/attractionContext";
import { useContext } from "react";

export const useAttractionsContext = () => {
    const context = useContext(AttractionsContext)

    if (!context) {
        throw Error('useAttractionsContext must be used inside a AttractionsContextProvider')
    }

    return context
}