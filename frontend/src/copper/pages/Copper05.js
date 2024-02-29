import { useEffect } from "react";
import { useCopper05Context } from "../hooks/useCopper05Context";
import { Link } from "react-router-dom";

import Navbar from "../../homePage/Navbar";
import Copper05Details from '../components/Copper05Details';
import Copper05Form from "../components/Copper05Form";


const Copper05 = () => {
    const {copper05s, dispatch} = useCopper05Context()

    useEffect(() => {
        const fetchCopper05s = async () => {
            const response = await fetch('/copper05')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COPPER05S', payload: json})
            }
        }
        
        fetchCopper05s()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <Copper05Form />
            <Link to="/copper05/list" target="_blank" className="listButton">List View</Link>
            <div className="copper05s">
                {copper05s && copper05s.map(copper05 => (
                    <Copper05Details copper05={copper05} key={copper05._id} />
                ))}
            </div> 
        </div>
    )
}

export default Copper05