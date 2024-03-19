import { Link } from "react-router-dom"

import Navbar from "./Navbar"

const Home = () => {
    return (
        <div className="home-background">
            <Navbar />
            <div className="home">
                <h2>Which product element?</h2>
                    <div className="homeButtons">
                        <Link to="/copper" className="CuButton">
                            <div className="element">
                                <div className="square">
                                    <div className="atomic-number">29</div>
                                    <div className="label">
                                        <div className="symbol">Cu</div>
                                        <div className="name">Copper</div>
                                    </div>
                                    <div className="atomic-mass">63.546</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/tin" className="SnButton">
                            <div className="element">
                                <div className="square">
                                    <div className="atomic-number">50</div>
                                    <div className="label">
                                        <div className="symbol">Sn</div>
                                        <div className="name">Tin</div>
                                    </div>
                                    <div className="atomic-mass">204.38</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/nickel" className="NiButton">
                        <div className="element">
                                <div className="square">
                                    <div className="atomic-number">28</div>
                                    <div className="label">
                                        <div className="symbol">Ni</div>
                                        <div className="name">Nickel</div>
                                    </div>
                                    <div className="atomic-mass">58.693</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/indium" className="InButton">
                            <div className="element">
                                <div className="square">
                                    <div className="atomic-number">49</div>
                                    <div className="label">
                                        <div className="symbol">In</div>
                                        <div className="name">Indium</div>
                                    </div>
                                    <div className="atomic-mass">114.82</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/lead" className="PbButton">
                            <div className="element">
                                <div className="square">
                                    <div className="atomic-number">82</div>
                                    <div className="label">
                                        <div className="symbol">Pb</div>
                                        <div className="name">Lead</div>
                                    </div>
                                    <div className="atomic-mass">207.2</div>
                                </div>
                            </div>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Home