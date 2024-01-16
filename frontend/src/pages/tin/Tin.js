import Navbar from "../../components/Navbar"
import { Link } from "react-router-dom"

const Tin = () => {
    return (
        <div className="tin-background">
            <Navbar />
            <div className="home">
                <h2>Tin</h2>
                <div className="SnButtons">
                    <Link to="/sn_nexx" className="SnNexx">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">ChemX</div>
                                    <div class="name">Sn</div>
                                </div>
                                <div class="atomic-mass">K17212328-10</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/hot-cell" className="HotCell">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">Hot Cell</div>
                                    <div class="name">Sn</div>
                                </div>
                                <div class="atomic-mass">K17240967-03</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lam-sn" className="lam-sn">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">LAM</div>
                                    <div class="name">Sn (5 pcs)</div>
                                </div>
                                <div class="atomic-mass">D100SN-W300</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/lam-sn" className="acm">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">ACM</div>
                                    <div class="name">Sn</div>
                                </div>
                                <div class="atomic-mass">ACM014-10003</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Tin