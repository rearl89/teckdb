import { useEffect } from "react"
import { useWedgesContext } from "../hooks/useWedgesContext"

import Navbar from "../../homePage/Navbar"
import WedgesDetails from "../components/WedgesDetails";
import WedgesForm from "../components/WedgesForm";

const WEDGES = () => {
    const {wedgess, dispatch} = useWedgesContext()

    useEffect(() => {
        const fetchWedgess = async () => {
            const response = await fetch('/wedges')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WEDGESS', payload: json})
            }
        }
        
        fetchWedgess()
    }, [dispatch])
    return (
        <div className="tin-background-fill">
            <Navbar />
            <WedgesForm />
            <div className="cuChemXColumns">
                <h5>Batch ID</h5>
                <h5>Anode #</h5>
                <h5>Date</h5>
                <h5>Weight 1</h5>
                <h5>Weight 2</h5>
                <h5>Weight 3</h5>
                <h5>Weight 4</h5>
                <h5>Weight 5</h5>
                <h5>Thickness</h5>
                <h5>Pass Visual?</h5>
                <h5>Comment</h5>
            </div>
            <div className="cuChemXs">
                {wedgess && wedgess.map(wedges => (
                        <WedgesDetails sn_nexx={wedges} key={wedges._id} />
                    ))}
            </div>
        </div>
    )
}

export default WEDGES