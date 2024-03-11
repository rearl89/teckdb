import { useEffect } from "react";
import { useCopper01Context } from "../hooks/useCopper01Context";
// import { Link } from "react-router-dom";

import Navbar from "../../homePage/Navbar";
import Copper01Details from '../components/Copper01Details';
import Copper01Form from "../components/Copper01Form";


const Copper01 = () => {
    const {copper01s, dispatch} = useCopper01Context()

    useEffect(() => {
        const fetchCopper01s = async () => {
            const response = await fetch('/copper01')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COPPER01S', payload: json})
            }
        }
        
        fetchCopper01s()
    }, [dispatch])

    return (
        <div className="copper-background-fill">
            <Navbar />
            <Copper01Form />
            {/* <Link to="/copper01/list" target="_blank" className="listButton">List View</Link> */}
            <form className="cu01C-Ds">
                <div className="cu01Columns">
                    <h6>Batch ID</h6>
                    <h6>Set #</h6>
                    <h6>Date</h6>
                    <h6>Pass Post?</h6>
                    <h6>Pass Sponge?</h6>
                    <h6>Ring 1</h6>
                    <h6>Bottom</h6>
                    <h6>Middle</h6>
                    <h6>Top</h6>
                    <h6>Average</h6>
                    <h6>Ring 2</h6>
                    <h6>Bottom</h6>
                    <h6>Middle</h6>
                    <h6>Top</h6>
                    <h6>Average</h6>
                    <h6>Ring 3</h6>
                    <h6>Bottom</h6>
                    <h6>Middle</h6>
                    <h6>Top</h6>
                    <h6>Average</h6>
                    <h6>Ring 4</h6>
                    <h6>Bottom</h6>
                    <h6>Middle</h6>
                    <h6>Top</h6>
                    <h6>Average</h6>
                    <h6>Ring 1</h6>
                    <h6>OD1</h6>
                    <h6>OD2</h6>
                    <h6>Average</h6>
                    <h6>Ring 2</h6>
                    <h6>OD1</h6>
                    <h6>OD2</h6>
                    <h6>Average</h6>
                    <h6>Ring 3</h6>
                    <h6>OD1</h6>
                    <h6>OD2</h6>
                    <h6>OD3</h6>
                    <h6>OD4</h6>
                    <h6>Average</h6>
                    <h6>Ring 4</h6>
                    <h6>OD1</h6>
                    <h6>OD2</h6>
                    <h6>OD3</h6>
                    <h6>OD4</h6>
                    <h6>Average</h6>
                </div>
                <div className="copper01s">
                    {copper01s && copper01s.map(copper01 => (
                        <Copper01Details copper01={copper01} key={copper01._id} />
                    ))}
                </div> 
            </form>
        </div>
    )
}

export default Copper01