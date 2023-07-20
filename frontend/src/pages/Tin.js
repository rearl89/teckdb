import { Link } from "react-router-dom"

const Tin = () => {
    return (
        <div className="page">
            <h2>Tin</h2>
            <ul>
                <li><Link to="/sn-nexx"><h3>SN NEXX</h3></Link></li>
                <li><Link to="/hot-cell"><h3>Hot Cell</h3></Link></li>
            </ul>
        </div>
    )
}

export default Tin