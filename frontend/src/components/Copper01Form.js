import { useState } from "react"
import { useCopper01Context } from "../hooks/useCopper01Context"

const Copper01Form = () => {
    const { dispatch } = useCopper01Context()

    const [batchID, setBatchID] = useState('')
    const [set, setSet] = useState('')
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        const copper01 = {batchID, set, postPass, spongePass, rng1b, rng1m, rng1t, rng2b, rng2m, rng2t, rng3b, rng3m, rng3t, rng4b, rng4m, rng4t, rng1od1, rng1od2, rng2od1, rng2od2, rng3od1, rng3od2, rng3od3, rng3od4, rng4od1, rng4od2, rng4od3, rng4od4}

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
        }
        if (response.ok) {
            setBatchID('')
            setSet('')
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
            console.log('new anode added', json)
            dispatch({type: 'CREATE_COPPER01', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new anode</h3>

            <label>Batch ID:</label>
            <input type ="text" onChange={(e) => setBatchID(e.target.value)} value={batchID} />

            <label>Set #:</label>
            <input type ="number" onChange={(e) => setSet(e.target.value)} value={set} />

            <label>Pass Post?</label>
            <input type ="text" onChange={(e) => setPostPass(e.target.value)} value={postPass} />
            

            <label>Pass Sponge?</label>
            <input type ="text" onChange={(e) => setSpongePass(e.target.value)} value={spongePass} />
            
            
            <label>Rng1b:</label>
            <input type ="number" onChange={(e) => setRng1b(e.target.value)} value={rng1b} />

            <label>Rng1m:</label>
            <input type ="number" onChange={(e) => setRng1m(e.target.value)} value={rng1m} />

            <label>Rng1t:</label>
            <input type ="number" onChange={(e) => setRng1t(e.target.value)} value={rng1t} />

            <label>Rng2b:</label>
            <input type ="number" onChange={(e) => setRng2b(e.target.value)} value={rng2b} />

            <label>Rng2m:</label>
            <input type ="number" onChange={(e) => setRng2m(e.target.value)} value={rng2m} />

            <label>Rng2t:</label>
            <input type ="number" onChange={(e) => setRng2t(e.target.value)} value={rng2t} />

            <label>Rng3b:</label>
            <input type ="number" onChange={(e) => setRng3b(e.target.value)} value={rng3b} />

            <label>Rng3m:</label>
            <input type ="number" onChange={(e) => setRng3m(e.target.value)} value={rng3m} />

            <label>Rng3t:</label>
            <input type ="number" onChange={(e) => setRng3t(e.target.value)} value={rng3t} />

            <label>Rng4b:</label>
            <input type ="number" onChange={(e) => setRng4b(e.target.value)} value={rng4b} />

            <label>Rng4m:</label>
            <input type ="number" onChange={(e) => setRng4m(e.target.value)} value={rng4m} />

            <label>Rng4t:</label>
            <input type ="number" onChange={(e) => setRng4t(e.target.value)} value={rng4t} />

            <label>Rng1od1:</label>
            <input type ="number" onChange={(e) => setRng1od1(e.target.value)} value={rng1od1} />

            <label>Rng1od2:</label>
            <input type ="number" onChange={(e) => setRng1od2(e.target.value)} value={rng1od2} />

            <label>Rng2od1:</label>
            <input type ="number" onChange={(e) => setRng2od1(e.target.value)} value={rng2od1} />

            <label>Rng2od2:</label>
            <input type ="number" onChange={(e) => setRng2od2(e.target.value)} value={rng2od2} />

            <label>Rng3od1:</label>
            <input type ="number" onChange={(e) => setRng3od1(e.target.value)} value={rng3od1} />

            <label>Rng3od2:</label>
            <input type ="number" onChange={(e) => setRng3od2(e.target.value)} value={rng3od2} />

            <label>Rng3od3:</label>
            <input type ="number" onChange={(e) => setRng3od3(e.target.value)} value={rng3od3} />

            <label>Rng3od4:</label>
            <input type ="number" onChange={(e) => setRng3od4(e.target.value)} value={rng3od4} />

            <label>Rng4od1:</label>
            <input type ="number" onChange={(e) => setRng4od1(e.target.value)} value={rng4od1} />

            <label>Rng4od2:</label>
            <input type ="number" onChange={(e) => setRng4od2(e.target.value)} value={rng4od2} />

            <label>Rng4od3:</label>
            <input type ="number" onChange={(e) => setRng4od3(e.target.value)} value={rng4od3} />

            <label>Rng4od4:</label>
            <input type ="number" onChange={(e) => setRng4od4(e.target.value)} value={rng4od4} />

            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Copper01Form