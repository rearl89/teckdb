import { Link } from "react-router-dom"

import Navbar from "../../homePage/Navbar"


const Copper = () => {
    return (
        <div className="copper-background">
            <Navbar />
            <div className="cuHome">
                <h2>Copper</h2>
                <div className="CuButtons">
                <Link to="/cup200-3" className="CuP200-3">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">200-3</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">111T1191-01</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cup200-3Pure" className="PureCu">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">200-3</div>
                                    <div className="name">Pure Cu</div>
                                </div>
                                <div className="atomic-mass">111T1191-03</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper01" className="CuP01">
                        <div className="element">
                            <div className="square">
                                <div className="CuNumber">01</div>
                                <div className="label">
                                    <div className="symbol">300-3</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">111T1197-01</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper05" className="CuP05">
                        <div className="element">
                            <div className="square">
                                <div className="CuNumber">05</div>
                                <div className="label">
                                    <div className="symbol">300-3</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">111T1197-05</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper09" className="CuP09">
                        <div className="element">
                            <div className="square">
                                <div className="CuNumber">09</div>
                                <div className="label">
                                    <div className="symbol">300-3</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">111T1197-09</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper09DH" className="CuP09DH">
                        <div className="element">
                            <div className="square">
                                <div className="CuNumber">09DH</div>
                                <div className="label">
                                    <div className="symbol">300-3</div>
                                    <div className="name">CuP Drill Hole</div>
                                </div>
                                <div className="atomic-mass">111T1197-09DH</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cuChemX" className="CuChemX">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">ChemX</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">K17212328-04</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/eeja" className="eeja">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">Eeja</div>
                                    <div className="name">Cu</div>
                                </div>
                                <div className="atomic-mass">43031</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-ebara" className="cu-ebara">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">Ebara</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">CU280EB</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-wlp" className="WLP-cu">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">WLP</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">AC390391</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-wlp-puck" className="WLP-cu-Puck">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">WLP</div>
                                    <div className="name">CuP (Puck Only)</div>
                                </div>
                                <div className="atomic-mass">A0420390</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/qorvo" className="qorvo">
                        <div className="element">
                            <div className="square">
                                <div className="label">
                                    <div className="symbol">QORVO</div>
                                    <div className="name">CuP</div>
                                </div>
                                <div className="atomic-mass">K17012436-04</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Copper