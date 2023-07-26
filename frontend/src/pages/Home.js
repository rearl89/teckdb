import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h2>Home</h2>
                <ul>
                    <li><Link to="/copper">Copper</Link></li>
                    <li><Link to="/tin">Tin</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Home