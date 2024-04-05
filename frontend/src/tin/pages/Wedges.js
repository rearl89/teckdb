import { useEffect } from "react"
import { useWedgesContext } from "../hooks/useWedgesContext"

import Navbar from "../../homePage/Navbar"
import WedgesDetails from "../components/WedgesDetails";
import WedgesForm from "../components/WedgesForm";
import WedgesTestHeadings from "../components/WedgesTestHeadings";

const WEDGES = () => {
    const {wedgess, dispatch} = useWedgesContext()

    useEffect(() => {
        const fetchWedgess = async () => {
            const response = await fetch('/wedges')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_WEDGESS', payload: json})
            }
        }
        
        fetchWedgess()
    }, [dispatch])
    return (
        <div className="tin-background-fill">
            <Navbar />
            <WedgesForm />
            <form className="overflow">
                <WedgesTestHeadings />
                {wedgess && wedgess.map(wedges => (
                        <WedgesDetails sn_nexx={wedges} key={wedges._id} />
                    ))}
            </form>
        </div>
    )
}

export default WEDGES