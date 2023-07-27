import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const Tin = () => {
    return (
        <div className="page">
            <Navbar />
            <div className="home">
                <h2>Tin</h2>
                <Link to="/sn_nexx"><h3>SN NEXX</h3></Link>
                <Link to="/hot-cell"><h3>Hot Cell</h3></Link>
            </div>
        </div>
    )
}

export default Tin