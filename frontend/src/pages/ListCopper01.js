import { useEffect } from "react"
import { useCopper01Context } from "../hooks/useCopper01Context"

import ListCopper01Details from '../components/ListCopper01Details'



const ListCopper01 = () => {
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
            <div className="listContainer">
                        <strong><p>&nbsp;BatchID</p></strong>
                        <strong><p>Set#</p></strong>
                        <strong><p>Date</p></strong>
                        <strong><p>Post</p></strong>
                        <strong><p>Sponge</p></strong>
                        <strong><p>Rng1b</p></strong>
                        <strong><p>Rng1m</p></strong>
                        <strong><p>Rng1t</p></strong>
                        <strong><p>Rng1Avg</p></strong>
                        <strong><p>Rng2b</p></strong>
                        <strong><p>Rng2m</p></strong>
                        <strong><p>Rng2t</p></strong>
                        <strong><p>Rng2Avg</p></strong>
                        <strong><p>Rng3b</p></strong>
                        <strong><p>Rng3m</p></strong>
                        <strong><p>Rng3t</p></strong>
                        <strong><p>Rng3Avg</p></strong>
                        <strong><p>Rng4b</p></strong>
                        <strong><p>Rng4m</p></strong>
                        <strong><p>Rng4t</p></strong>
                        <strong><p>Rng4Avg</p></strong>
                        <strong><p>Rng1od1</p></strong>
                        <strong><p>Rng1od2</p></strong>
                        <strong><p>Rng1odAvg</p></strong>
                        <strong><p>Rng2od1</p></strong>
                        <strong><p>Rng2od2</p></strong>
                        <strong><p>Rng2odAvg</p></strong>
                        <strong><p>Rng3od1</p></strong>
                        <strong><p>Rng3od2</p></strong>
                        <strong><p>Rng3od3</p></strong>
                        <strong><p>Rng3od4</p></strong>
                        <strong><p>Rng3odAvg</p></strong>
                        <strong><p>Rng4od1</p></strong>
                        <strong><p>Rng4od2</p></strong>
                        <strong><p>Rng4od3</p></strong>
                        <strong><p>Rng4od4</p></strong>
                        <strong><p>Rng4odAvg</p></strong>
            </div>

            <div>
                    {copper01s && copper01s.map(copper01 => (
                        <ListCopper01Details copper01={copper01} key={copper01._id} />
                    ))}
            </div>
        </div>
            
        
    )
}

export default ListCopper01