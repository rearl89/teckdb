import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div className="home-background">
            <Navbar />
            <div className="home">
                <h2>Home</h2>
                    <div className="homeButtons">
                        <Link to="/copper" className="CuButton">Copper</Link>
                        <Link to="/tin" className="SnButton">Tin</Link>
                        <Link to="/nickel" className="NiButton">Nickel</Link>
                        <Link to="/indium" className="InButton">Indium</Link>
                    </div>
            </div>
        </div>
    )
}

export default Home