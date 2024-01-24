import { useState } from "react"
import { useCopper01Context } from "../hooks/useCopper01Context"

const Copper01Form = () => {
    const { dispatch } = useCopper01Context()

    const [batchID, setBatchID] = useState('')
    
    const [postPass, setPostPass] = useState('')
    const [spongePass, setSpongePass] = useState('')
    const [rng1b, setRng1b] = useState('')
    const [rng1m, setRng1m] = useState('')
    const [rng1t, setRng1t] = useState('')
    const [rng2b, setRng2b] = useState('')
    const [rng2m, setRng2m] = useState('')
    const [rng2t, setRng2t] = useState('')
    const [rng3b, setRng3b] = useState('')
    const [rng3m, setRng3m] = useState('')
    const [rng3t, setRng3t] = useState('')
    const [rng4b, setRng4b] = useState('')
    const [rng4m, setRng4m] = useState('')
    const [rng4t, setRng4t] = useState('')
    const [rng1od1, setRng1od1] = useState('')
    const [rng1od2, setRng1od2] = useState('')
    const [rng2od1, setRng2od1] = useState('')
    const [rng2od2, setRng2od2] = useState('')
    const [rng3od1, setRng3od1] = useState('')
    const [rng3od2, setRng3od2] = useState('')
    const [rng3od3, setRng3od3] = useState('')
    const [rng3od4, setRng3od4] = useState('')
    const [rng4od1, setRng4od1] = useState('')
    const [rng4od2, setRng4od2] = useState('')
    const [rng4od3, setRng4od3] = useState('')
    const [rng4od4, setRng4od4] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const copper01 = {batchID, postPass, spongePass, rng1b, rng1m, rng1t, rng2b, rng2m, rng2t, rng3b, rng3m, rng3t, rng4b, rng4m, rng4t, rng1od1, rng1od2, rng2od1, rng2od2, rng3od1, rng3od2, rng3od3, rng3od4, rng4od1, rng4od2, rng4od3, rng4od4}

        const response = await fetch('/copper01', {
            method: 'POST',
            body: JSON.stringify(copper01),
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
            setPostPass('')
            setSpongePass('')
            setRng1b('')
            setRng1m('')
            setRng1t('')
            setRng2b('')
            setRng2m('')
            setRng2t('')
            setRng3b('')
            setRng3m('')
            setRng3t('')
            setRng4b('')
            setRng4m('')
            setRng4t('')
            setRng1od1('')
            setRng1od2('')
            setRng2od1('')
            setRng2od2('')
            setRng3od1('')
            setRng3od2('')
            setRng3od3('')
            setRng3od4('')
            setRng4od1('')
            setRng4od2('')
            setRng4od3('')
            setRng4od4('')
            setError(null)
            setEmptyFields([])
            console.log('new anode added', json)
            dispatch({type: 'CREATE_COPPER01', payload: json})
        }
    }

    return (
        <form className="cu01Form" onSubmit={handleSubmit}>
            <div className="formHeader">
                <h2>3-300 CuP (01)</h2>
            </div>
            <div className="cuFormGrid">
                <div>
                    <input type="text" onChange={(e) => setBatchID(e.target.value)} value={batchID} className={emptyFields.includes('batchID') ? 'error' : ''} placeholder="Batch ID"/>
                </div>
                
                <div>
                    <input type="text" onChange={(e) => setPostPass(e.target.value)} value={postPass} className={emptyFields.includes('pass post') ? 'error' : ''} placeholder="Post?"/>
                </div>
                
                <div>
                    <input type="text" onChange={(e) => setSpongePass(e.target.value)} value={spongePass} className={emptyFields.includes('pass sponge') ? 'error' : ''} placeholder="Sponge?"/>
                </div>

                <div>
                    <input type="number" onChange={(e) => setRng1b(e.target.value)} value={rng1b} className={emptyFields.includes('rng1b') ? 'error' : ''} placeholder="R1B"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng1m(e.target.value)} value={rng1m} className={emptyFields.includes('rng1m') ? 'error' : ''} placeholder="R1M"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng1t(e.target.value)} value={rng1t} className={emptyFields.includes('rng1t') ? 'error' : ''} placeholder="R1T"/>
                </div>
               
                <div>
                    <input type ="number" onChange={(e) => setRng2b(e.target.value)} value={rng2b} className={emptyFields.includes('rng2b') ? 'error' : ''} placeholder="R2B"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng2m(e.target.value)} value={rng2m} className={emptyFields.includes('rng2m') ? 'error' : ''} placeholder="R2M"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng2t(e.target.value)} value={rng2t} className={emptyFields.includes('rng2t') ? 'error' : ''} placeholder="R2T"/>
                </div>

                <div>    
                    <input type ="number" onChange={(e) => setRng3b(e.target.value)} value={rng3b} className={emptyFields.includes('rng3b') ? 'error' : ''} placeholder="R3B"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng3m(e.target.value)} value={rng3m} className={emptyFields.includes('rng3m') ? 'error' : ''} placeholder="R3M"/>
                </div>
               
                <div>
                    <input type ="number" onChange={(e) => setRng3t(e.target.value)} value={rng3t} className={emptyFields.includes('rng3t') ? 'error' : ''} placeholder="R3T"/>
                </div>

                <div>
                    <input type ="number" onChange={(e) => setRng4b(e.target.value)} value={rng4b} className={emptyFields.includes('rng4b') ? 'error' : ''} placeholder="R4B"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng4m(e.target.value)} value={rng4m} className={emptyFields.includes('rng4m') ? 'error' : ''} placeholder="R4M"/>
                </div>
               
                <div>
                    <input type ="number" onChange={(e) => setRng4t(e.target.value)} value={rng4t} className={emptyFields.includes('rng4t') ? 'error' : ''} placeholder="R4T"/>
                </div>

                <div>
                    <input type ="number" onChange={(e) => setRng1od1(e.target.value)} value={rng1od1} className={emptyFields.includes('rng1od1') ? 'error' : ''} placeholder="R1OD1"/>
                </div>
               
                <div>
                    <input type ="number" onChange={(e) => setRng1od2(e.target.value)} value={rng1od2} className={emptyFields.includes('rng1od2') ? 'error' : ''} placeholder="R1OD2"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng2od1(e.target.value)} value={rng2od1} className={emptyFields.includes('rng2od1') ? 'error' : ''} placeholder="R2OD1"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng2od2(e.target.value)} value={rng2od2} className={emptyFields.includes('rng2od2') ? 'error' : ''} placeholder="R2OD2"/>
                </div>

                
                <div>
                    <input type ="number" onChange={(e) => setRng3od1(e.target.value)} value={rng3od1} className={emptyFields.includes('rng3od1') ? 'error' : ''} placeholder="R3OD1"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng3od2(e.target.value)} value={rng3od2} className={emptyFields.includes('rng3od2') ? 'error' : ''} placeholder="R3OD2"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng3od3(e.target.value)} value={rng3od3} className={emptyFields.includes('rng3od3') ? 'error' : ''} placeholder="R3OD3"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng3od4(e.target.value)} value={rng3od4} className={emptyFields.includes('rng3od4') ? 'error' : ''} placeholder="R3OD4"/>
                </div>

                <div>
                    <input type ="number" onChange={(e) => setRng4od1(e.target.value)} value={rng4od1} className={emptyFields.includes('rng4od1') ? 'error' : ''} placeholder="R4OD1"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng4od2(e.target.value)} value={rng4od2} className={emptyFields.includes('rng4od2') ? 'error' : ''} placeholder="R4OD2"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng4od3(e.target.value)} value={rng4od3} className={emptyFields.includes('rng4od3') ? 'error' : ''} placeholder="R4OD3"/>
                </div>
                
                <div>
                    <input type ="number" onChange={(e) => setRng4od4(e.target.value)} value={rng4od4} className={emptyFields.includes('rng4od4') ? 'error' : ''} placeholder="R4OD4"/>
                </div>
            </div>

            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Copper01Form