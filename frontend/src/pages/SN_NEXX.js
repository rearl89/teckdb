import { useEffect } from "react"
import { useSnNexxContext } from "../hooks/useSnNexxContext"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import SnNexxDetails from "../components/SnNexxDetails"
import SnNexxForm from "../components/SnNexxForm"

const SN_NEXX = () => {
    const {sn_nexxs, dispatch} = useSnNexxContext()

    useEffect(() => {
        const fetchSnNexxs = async () => {
            const response = await fetch('/sn_nexx')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_SN_NEXXS', payload: json})
            }
        }
        
        fetchSnNexxs()
    }, [dispatch])
    return (
        <div className="page">
            <Navbar />
            <SnNexxForm />
            <Link to="/sn_nexx/list" target="_blank" className="listButton">List View</Link>
            <div>
                {sn_nexxs && sn_nexxs.map(sn_nexx => (
                        <SnNexxDetails sn_nexx={sn_nexx} key={sn_nexx._id} />
                    ))}
            </div>
        </div>
    )
}

export default SN_NEXX