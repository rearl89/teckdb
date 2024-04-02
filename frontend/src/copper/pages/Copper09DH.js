import { useEffect } from "react";
import { useCopper09DHContext } from "../hooks/useCopper09DHContext";
// import { Link } from "react-router-dom";

import Navbar from "../../homePage/Navbar";
import Copper09DHDetails from '../components/Copper09DHDetails';
import Copper09DHForm from "../components/Copper09DHForm";
import Copper09DHTestHeadings from "../components/Copper09DHTestHeadings";


const Copper09DH = () => {
    const {copper09DHs, dispatch} = useCopper09DHContext()

    useEffect(() => {
        const fetchCopper09DHs = async () => {
            const response = await fetch('/copper09DH')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COPPER09DHS', payload: json})
            }
        }
        
        fetchCopper09DHs()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <Copper09DHForm />
            {/* <Link to="/copper09DH/list" target="_blank" className="listButton">List View</Link> */}
            <div className="overflow">
                <form>
                    <Copper09DHTestHeadings/>
                    <div className="copper09DHs">
                        {copper09DHs && copper09DHs.map(copper09DH => (
                            <Copper09DHDetails copper09DH={copper09DH} key={copper09DH._id} />
                        ))}
                    </div> 
                </form>
            </div>
        </div>
    )
}

export default Copper09DH