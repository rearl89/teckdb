import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div className="home-background">
            <Navbar />
            <div className="home">
                <h2>Home</h2>
                    <div className="homeButtons">
                        <Link to="/copper" className="CuButton"></Link>
                        <Link to="/tin" className="SnButton"></Link>
                        <Link to="/nickel" className="NiButton"></Link>
                    </div>
            </div>
        </div>
    )
}

export default Home