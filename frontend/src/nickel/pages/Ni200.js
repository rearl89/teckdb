import { useEffect } from "react";
import { useNi200Context } from "../hooks/useNi200Context";

import Navbar from "../../homePage/Navbar";
import Ni200Details from '../components/Ni200Details';
import Ni200Form from "../components/Ni200Form";
import Ni200TestHeadings from "../components/Ni200TestHeadings";


const Ni200 = () => {
    const {ni200s, dispatch} = useNi200Context()

    useEffect(() => {
        const fetchNi200s = async () => {
            const response = await fetch('/ni200')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_NI200S', payload: json})
            }
        }
        
        fetchNi200s()
    }, [dispatch])

    return (
        <div className="ni-background-fill">
            <Navbar />
            <Ni200Form />
            <form className="overflow">
                <Ni200TestHeadings />
                <div className="ni200s">
                    {ni200s && ni200s.map(ni200 => (
                        <Ni200Details ni200={ni200} key={ni200._id} />
                    ))}
                </div> 
            </form>
        </div>
    )
}

export default Ni200;