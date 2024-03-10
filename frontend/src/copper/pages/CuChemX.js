import { useEffect } from "react";
import { useCuChemXContext } from "../hooks/useCuChemXContext";
// import { Link } from "react-router-dom";

import Navbar from "../../homePage/Navbar";
import CuChemXForm from "../components/CuChemXForm";
import CuChemXDetails from "../components/CuChemXDetails";


const CuChemX = () => {
    const {cuChemXs, dispatch} = useCuChemXContext()

    useEffect(() => {
        const fetchCuChemXs = async () => {
            const response = await fetch('/cuChemX')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CUCHEMXS', payload: json})
            }
        }
        
        fetchCuChemXs()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <CuChemXForm />
            <div className="cuChemXColumns">
                <h5>Batch ID</h5>
                <h5>Anode #</h5>
                <h5>Date</h5>
                <h5>Weight</h5>
                <h5>Thickness</h5>
                <h5>Pass Visual?</h5>
                <h5>Comment</h5>
            </div>
            <div className="cuChemXs">
                {cuChemXs && cuChemXs.map(cuChemX => (
                    <CuChemXDetails cuChemX={cuChemX} key={cuChemX._id} />
                ))}
            </div> 
        </div>
    )
}

export default CuChemX