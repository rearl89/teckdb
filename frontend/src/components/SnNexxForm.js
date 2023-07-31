import { useState } from "react"
import { useSnNexxContext } from "../hooks/useSnNexxContext"

const SnNexxForm = () => {
    const { dispatch } = useSnNexxContext()

    const [batchID, setBatchID] = useState('')
    // const [anode, setAnode] = useState('')
    const [weight, setWeight] = useState('')
    const [thickness, setThickness] = useState('')
    const [visualPass, setVisualPass] = useState('')
    const [comment, setComment] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])



    const handleSubmit = async (e) => {
        e.preventDefault()
        // re-add anode below
        const sn_nexx = {batchID, weight, thickness, visualPass, comment}

        const response = await fetch('/sn_nexx', {
            method: 'POST',
            body: JSON.stringify(sn_nexx),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setBatchID('')
            // setAnode('')
            setWeight('')
            setThickness('')
            setVisualPass('')
            setComment('')
            setError(null)
            setEmptyFields([])
            console.log('new anode added', json)
            dispatch({type: 'CREATE_SN_NEXX', payload: json})
        }
    }

    

    return (
        <form className="create" onSubmit={handleSubmit}>
            <div>
                <h2>Sn NEXX</h2>
            </div>
            <div className="snFormGrid">
                <div>
                    <label>
                        Batch ID:
                    </label>
                </div>
                <div>
                    <input type="number" onChange={(e) => setBatchID(e.target.value)} value={batchID} className={emptyFields.includes('batchID') ? 'error' : ''} />
                </div>
              
                {/* <div>
                    <label>Anode #:</label>
                </div>
                <div>
                    <input type="number" onChange={(e) => setAnode(e.target.value)} value={anode} className={emptyFields.includes('anode') ? 'error' : ''} />
                </div>  */}
                
                <div>
                    <label>Weight:</label>
                </div>
                <div>
                    <input type="number" onChange={(e) => setWeight(e.target.value)} value={weight} step="any" className={emptyFields.includes('weight') ? 'error' : ''} />
                </div>
                <div>
                    <label>Thickness:</label>
                </div>
                <div>
                    <input type="number" onChange={(e) => setThickness(e.target.value)} value={thickness} className={emptyFields.includes('thickness') ? 'error' : ''} />
                </div>
                <div>
                    <label>Pass Visual?</label>
                </div>
                <div>
                    <input type="text" onChange={(e) => setVisualPass(e.target.value)} value={visualPass} className={emptyFields.includes('pass visual') ? 'error' : ''} />
                </div>
                <div>
                    <label>Comment:</label>
                </div>
                <div>
                    <textarea type="text" rows="5" cols="110"  onChange={(e) => setComment(e.target.value)} value={comment} className={emptyFields.includes('comment') ? 'error' : ''} />
                </div>
            </div>
            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default SnNexxForm