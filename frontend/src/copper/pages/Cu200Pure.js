import { useEffect } from "react";
import { useCu200PureContext } from "../hooks/useCu200PureContext";

import Navbar from "../../homePage/Navbar";
import Cu200PureDetails from '../components/Cu200PureDetails';
import Cu200PureForm from "../components/Cu200PureForm";
// import Cu200PureTestHeadings from "../components/Cu200PureTestHeadings";


const Cu200Pure = () => {
    const {cu200Pures, dispatch} = useCu200PureContext()

    useEffect(() => {
        const fetchCu200Pures = async () => {
            const response = await fetch('/cu200Pure')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_CU200PURES', payload: json})
            }
        }
        
        fetchCu200Pures()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <Cu200PureForm />
            <form className="cu200C-Ds">
                {/* <Cu200PureTestHeadings/> */}
                <div className="copper200s">
                    {cu200Pures && cu200Pures.map(cu200Pure => (
                        <Cu200PureDetails cu200Pure={cu200Pure} key={cu200Pure._id} />
                    ))}
                </div> 
            </form>
        </div>
    )
}

export default Cu200Pure