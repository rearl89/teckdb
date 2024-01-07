import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"

const Tin = () => {
    return (
        <div className="tin-background">
            <Navbar />
            <div className="home">
                <h2>Tin</h2>
                <div className="snLinks">
                    <Link to="/sn_nexx" className="tin-links"><h3>SN NEXX</h3></Link>
                    <Link to="/hot-cell" className="tin-links"><h3>Hot Cell</h3></Link>
                </div>
            </div>
        </div>
    )
}

export default Tin