import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"


const Copper = () => {
    return (
        <div className="copper-background">
            <Navbar />
            <div className="home">
                <h2>Copper</h2>
                <div className="CuButtons">
                    <Link to="/copper01" className="CuP01">
                        <div class="element">
                            <div class="square">
                                <div class="CuNumber">01</div>
                                <div class="label">
                                    <div class="symbol">CuP</div>
                                    <div class="name">300-3</div>
                                </div>
                                <div class="atomic-mass">111T1197-01</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper05" className="CuP05">
                        <div class="element">
                            <div class="square">
                                <div class="CuNumber">05</div>
                                <div class="label">
                                    <div class="symbol">CuP</div>
                                    <div class="name">300-3</div>
                                </div>
                                <div class="atomic-mass">111T1197-05</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper09" className="CuP09">
                        <div class="element">
                            <div class="square">
                                <div class="CuNumber">09</div>
                                <div class="label">
                                    <div class="symbol">CuP</div>
                                    <div class="name">300-3</div>
                                </div>
                                <div class="atomic-mass">111T1197-09</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cup200-3" className="CuP200-3">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">CuP</div>
                                    <div class="name">200-3</div>
                                </div>
                                <div class="atomic-mass">111T1191-01</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-chemexx" className="CuChemX">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">Cu</div>
                                    <div class="name">ChemX</div>
                                </div>
                                <div class="atomic-mass">K17212328-04</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Copper