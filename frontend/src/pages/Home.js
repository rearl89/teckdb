import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div className="home-background">
            <Navbar />
            <div className="home">
                <h2>Home</h2>
                    <div className="homeButtons">
                        <Link to="/copper" className="linksButton">Cu</Link>
                        <Link to="/tin" className="linksButton">Sn</Link>
                    </div>
            </div>
        </div>
    )
}

export default Home