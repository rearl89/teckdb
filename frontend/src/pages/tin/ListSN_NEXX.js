import { useEffect } from "react"
import { useSnNexxContext } from "../../hooks/useSnNexxContext"

import ListSnNexxDetails from '../../components/ListSnNexxDetails'



const ListSnNexx = () => {
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
        <div>
            <div className="listSnNexx">
                        <strong><p>&nbsp;BatchID</p></strong>
                        <strong><p>Anode</p></strong>
                        <strong><p>Date</p></strong>
                        <strong><p>Weight</p></strong>
                        <strong><p>Thickness</p></strong>
                        <strong><p>Visual</p></strong>
                        <strong><p>Comment</p></strong>
            </div>

            <div>
                    {sn_nexxs && sn_nexxs.map(sn_nexx => (
                        <ListSnNexxDetails sn_nexx={sn_nexx} key={sn_nexx._id} />
                    ))}
            </div>
        </div>
            
        
    )
}

export default ListSnNexx