import Navbar from "../../homePage/Navbar"
import { Link } from "react-router-dom"

const Tin = () => {
    return (
        <div className="tin-background">
            <Navbar />
            <div className="home">
                <h2>Tin</h2>
                <div className="SnButtons">
                    <Link to="/sn_nexx" className="SnNexx">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">ChemX</div>
                                    <div className="name">Sn</div>
                                </div>
                                <div className="atomic-mass">K17212328-10</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/hot-cell" className="HotCell">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">Hot Cell</div>
                                    <div className="name">Sn</div>
                                </div>
                                <div className="atomic-mass">K17240967-03</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/wedges" className="lam-sn">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">LAM</div>
                                    <div className="name">Sn (5 pcs)</div>
                                </div>
                                <div className="atomic-mass">D100SN-W300</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/acm" className="acm">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">ACM</div>
                                    <div className="name">Sn</div>
                                </div>
                                <div className="atomic-mass">ACM014-10003</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tin