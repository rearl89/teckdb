import { Link } from "react-router-dom"

import Navbar from "../../components/Navbar"


const Copper = () => {
    return (
        <div className="copper-background">
            <Navbar />
            <div className="cuHome">
                <h2>Copper</h2>
                <div className="CuButtons">
                <Link to="/cup200-3" className="CuP200-3">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">200-3</div>
                                    <div class="name">CuP</div>
                                </div>
                                <div class="atomic-mass">111T1191-01</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cup200-3Pure" className="PureCu">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">200-3</div>
                                    <div class="name">Pure Cu</div>
                                </div>
                                <div class="atomic-mass">111T1191-03</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper01" className="CuP01">
                        <div class="element">
                            <div class="square">
                                <div class="CuNumber">01</div>
                                <div class="label">
                                    <div class="symbol">300-3</div>
                                    <div class="name">CuP</div>
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
                                    <div class="symbol">300-3</div>
                                    <div class="name">CuP</div>
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
                                    <div class="symbol">300-3</div>
                                    <div class="name">CuP</div>
                                </div>
                                <div class="atomic-mass">111T1197-09</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/copper09DH" className="CuP09DH">
                        <div class="element">
                            <div class="square">
                                <div class="CuNumber">09DH</div>
                                <div class="label">
                                    <div class="symbol">300-3</div>
                                    <div class="name">CuP Drill Hole</div>
                                </div>
                                <div class="atomic-mass">111T1197-09DH</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-chemexx" className="CuChemX">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">ChemX</div>
                                    <div class="name">CuP</div>
                                </div>
                                <div class="atomic-mass">K17212328-04</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/eeja" className="eeja">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">Eeja</div>
                                    <div class="name">Cu</div>
                                </div>
                                <div class="atomic-mass">43031</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-ebara" className="cu-ebara">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">Ebara</div>
                                    <div class="name">CuP</div>
                                </div>
                                <div class="atomic-mass">CU280EB</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-wlp" className="WLP-cu">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">WLP</div>
                                    <div class="name">CuP</div>
                                </div>
                                <div class="atomic-mass">AC390391</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/cu-wlp-puck" className="WLP-cu-Puck">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">WLP</div>
                                    <div class="name">CuP (Puck Only)</div>
                                </div>
                                <div class="atomic-mass">A0420390</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/qorvo" className="qorvo">
                        <div class="element">
                            <div class="square">
                                <div class="label">
                                    <div class="symbol">QORVO</div>
                                    <div class="name">CuP</div>
                                </div>
                                <div class="atomic-mass">K17012436-04</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Copper