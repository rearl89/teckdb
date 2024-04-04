import { useEffect } from "react";
import { useCuEbaraContext } from "../hooks/useCuEbaraContext";

import Navbar from "../../homePage/Navbar";
import CuEbaraForm from "../components/CuEbaraForm";
import CuEbaraDetails from "../components/CuEbaraDetails";


const CuEbara = () => {
    const {cuEbaras, dispatch} = useCuEbaraContext()

    useEffect(() => {
        const fetchCuEbaras = async () => {
            const response = await fetch('/cuEbara')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CUEbaraS', payload: json})
            }
        }
        
        fetchCuEbaras()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <CuEbaraForm />
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
                {cuEbaras && cuEbaras.map(cuEbara => (
                    <CuEbaraDetails cuEbara={cuEbara} key={cuEbara._id} />
                ))}
            </div> 
        </div>
    )
}

export default CuEbara