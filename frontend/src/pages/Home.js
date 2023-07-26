import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h2>Home</h2>
                
                    <button className="linksButton"><Link to="/copper" className="homeLinks">Copper</Link></button>
                    <button className="linksButton"><Link to="/tin" className="homeLinks">Tin</Link></button>
                
            </div>
        </div>
    )
}

export default Home