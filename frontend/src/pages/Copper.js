import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"


const Copper = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h2>Copper</h2>
                <div className="copperGrid">
                    <Link to="/copper01"><h3>3-300 CuP (01)</h3></Link>
                    <Link to="/copper05"><h3>3-300 CuP (05)</h3></Link>
                    <Link to="/copper09"><h3>3-300 CuP (09)</h3></Link>
                    <Link to="/cup200-3"><h3>3-200 CuP</h3></Link>
                    <Link to="/cu-chemexx"><h3>Cu Chemexx</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default Copper