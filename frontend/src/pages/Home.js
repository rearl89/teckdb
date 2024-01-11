import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div className="home-background">
            <Navbar />
            <div className="home">
                <h2>Home</h2>
                    <div className="homeButtons">
                        <Link to="/copper">
                            <div class="element">
                                <div class="square">
                                    <div class="atomic-number">29</div>
                                        <div class="label">
                                        <div class="symbol">Cu</div>
                                        <div class="name">Copper</div>
                                    </div>
                                    <div class="atomic-mass">63.546</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/tin">
                            <div class="element">
                                <div class="square">
                                    <div class="atomic-number">50</div>
                                    <div class="label">
                                        <div class="symbol">Sn</div>
                                        <div class="name">Tin</div>
                                    </div>
                                    <div class="atomic-mass">204.38</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/nickel">
                        <div class="element">
                                <div class="square">
                                    <div class="atomic-number">28</div>
                                    <div class="label">
                                        <div class="symbol">Ni</div>
                                        <div class="name">Nickel</div>
                                    </div>
                                    <div class="atomic-mass">58.693</div>
                                </div>
                            </div>
                        </Link>
                        <Link to="/indium">
                        <div class="element">
                                <div class="square">
                                    <div class="atomic-number">49</div>
                                    <div class="label">
                                        <div class="symbol">In</div>
                                        <div class="name">Indium</div>
                                    </div>
                                    <div class="atomic-mass">114.82</div>
                                </div>
                            </div>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Home