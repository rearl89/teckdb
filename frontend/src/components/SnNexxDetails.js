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
        <div>
            <h4>Batch ID: {sn_nexx.batchID} &emsp;&emsp; Anode #: {sn_nexx.anode} &emsp;&emsp; Date: {format(new Date(sn_nexx.createdAt), 'MM-dd-yyyy')}</h4>
                    
                    <p><strong>Weight:</strong> {sn_nexx.weight}
                    <strong>Thickness:</strong> {sn_nexx.thickness}</p>
                    <hr/>
                    <p><strong>Pass Visual? </strong> {sn_nexx.visualPass}
                    <strong>Comment:</strong> {sn_nexx.comment}
                    </p>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default SnNexxDetails