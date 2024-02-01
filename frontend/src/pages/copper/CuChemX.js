import { useEffect } from "react";
import { useCuChemXContext } from "../../hooks/useCuChemXContext";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";


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
            {/* <CuChemXForm /> */}
            {/* <Link to="/cuChemX/list" target="_blank" className="listButton">List View</Link> */}
            <div className="cuChemXs">
                {cuChemXs && cuChemXs.map(CuChemX => (
                    {/* <CuChemXDetails cuChemX={cuChemX} key={cuChemX._id} /> */}
                ))}
            </div> 
        </div>
    )
}

export default CuChemX