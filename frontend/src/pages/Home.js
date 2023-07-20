import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="home">
            <h2>Home</h2>
                <ul>
                    <li><Link to="/copper">Copper</Link></li>
                    <li><Link to="/tin">Tin</Link></li>
                </ul>
            </div>
    )
}

export default Home