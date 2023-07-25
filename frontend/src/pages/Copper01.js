import { useEffect } from "react"
import { useCopper01Context } from "../hooks/useCopper01Context"

import Copper01Details from '../components/Copper01Details'
import Copper01Form from "../components/Copper01Form"


const Copper01 = () => {
    const {copper01s, dispatch} = useCopper01Context()

    useEffect(() => {
        const fetchCopper01s = async () => {
            const response = await fetch('/copper01')
            const json = await response.json()

            if (response.ok) {
                dispatch({type: 'SET_COPPER01S', payload: json})
            }
        }
        
        fetchCopper01s()
    }, [dispatch])

    return (
        <div>
            <Copper01Form />
            <div className="copper01s">
                {copper01s && copper01s.map(copper01 => (
                    <Copper01Details copper01={copper01} key={copper01._id} />
                ))}
            </div>
            
        </div>
    )
}

export default Copper01