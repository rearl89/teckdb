import Navbar from "../../homePage/Navbar";
import { Link } from "react-router-dom";

const Nickel = () => {
    return (
        <div className="tin-background">
            <Navbar />
            <div className="home">
                <h2>Nickel</h2>
                <div className="SnButtons">
                    <Link to="/sn_nexx" className="SnNexx">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">200-3</div>
                                    <div className="name">Ni</div>
                                </div>
                                <div className="atomic-mass">Enter Ni PN</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nickel;