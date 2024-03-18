import { useEffect } from "react";
import { useCopper200Context } from "../hooks/useCopper200Context";

import Navbar from "../../homePage/Navbar";
import Copper200Details from '../components/Copper200Details';
import Copper200Form from "../components/Copper200Form";
import Copper200TestHeadings from "../components/Copper200TestHeadings";


const Copper200 = () => {
    const {copper200s, dispatch} = useCopper200Context()

    useEffect(() => {
        const fetchCopper200s = async () => {
            const response = await fetch('/copper200')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COPPER200S', payload: json})
            }
        }
        
        fetchCopper200s()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <Copper200Form />
            <form className="cu200C-Ds">
                <Copper200TestHeadings/>
                <div className="copper200s">
                    {copper200s && copper200s.map(copper200 => (
                        <Copper200Details copper200={copper200} key={copper200._id} />
                    ))}
                </div> 
            </form>
        </div>
    )
}

export default Copper200