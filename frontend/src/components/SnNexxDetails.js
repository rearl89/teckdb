import { useSnNexxContext } from "../hooks/useSnNexxContext"

import format from 'date-fns/format'

const SnNexxDetails = ({sn_nexx}) => {
    const { dispatch } = useSnNexxContext()
    const handleClick = async () => {
        const response = await fetch('/sn_nexx/' + sn_nexx._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_SN_NEXX', payload: json})
        }
    }
    return (
        <div className="snNexxContainer">
            <div className="snNexxGrid">
                <div>
                    <p><strong>Batch ID:</strong> {sn_nexx.batchID}</p>
                </div>
                    <p><strong>Anode #:</strong> {sn_nexx.anode}</p>
                <div>
                    <p><strong>Date:</strong> {format(new Date(sn_nexx.createdAt), 'MM-dd-yyyy')}</p>
                </div>
                <div>
                    <p><strong>Weight:</strong> {sn_nexx.weight}</p>
                </div>
                <div>
                    <p><strong>Thickness:</strong> {sn_nexx.thickness}</p>
                </div>
                <div>  
                    <p><strong>Pass Visual? </strong> {sn_nexx.visualPass}</p>
                </div>
            </div>
                <hr/>
            <p><strong>Comment:</strong> {sn_nexx.comment}</p>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default SnNexxDetails