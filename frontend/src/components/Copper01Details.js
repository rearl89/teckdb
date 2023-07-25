import { useCopper01Context } from "../hooks/useCopper01Context"

import format from 'date-fns/format'

const Copper01Details = ({copper01}) => {
    const { dispatch } = useCopper01Context()
    const handleClick = async () => {
        const response = await fetch('/copper01/' + copper01._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COPPER01', payload: json})
        }
    }
    return (
        <div className="anode-details">
            <h4>Batch ID: {copper01.batchID} &emsp;&emsp; Set #: {copper01.set} &emsp;&emsp; Date: {format(new Date(copper01.createdAt), 'MM-dd-yyyy')} &emsp;&emsp;</h4>
                    
                    <p><strong>Pass Post:</strong> {copper01.postPass} &emsp;&emsp;&emsp;
                    <strong className="ring2">Sponge Pass:</strong> {copper01.spongePass}</p>
                    <hr/>
                    <p><strong>Ring 1 &emsp;&emsp;&emsp; b:</strong> {copper01.rng1b}
                    <strong className="ring2">m:</strong> {copper01.rng1b}
                    <strong className="ring2">t:</strong> {copper01.rng1t}
                    <strong className="ring2">Avg:</strong> {copper01.rng1Average}</p>
                    <hr/>
                    <p><strong>Ring 2 &emsp;&emsp;&emsp; b:</strong> {copper01.rng1b} 
                    <strong className="ring2">m:</strong>  {copper01.rng2b} 
                    <strong className="ring2">t:</strong> {copper01.rng2t} 
                    <strong className="ring2">Avg:</strong> {copper01.rng2Average}</p>
                    <hr/>
                    <p><strong>Ring 3  &emsp;&emsp;&emsp; b:</strong> {copper01.rng1b} 
                    <strong className="ring2"g>m:</strong> {copper01.rng3b} 
                    <strong className="ring2">t:</strong> {copper01.rng3t} 
                    <strong className="ring2">Avg:</strong> {copper01.rng3Average}</p>
                    <hr/>
                    <p><strong>Ring 4  &emsp;&emsp;&emsp; b:</strong> {copper01.rng1b} 
                    <strong className="ring2">m:</strong> {copper01.rng4b} 
                    <strong className="ring2">t:</strong> {copper01.rng4t} 
                    <strong className="ring2">Avg:</strong> {copper01.rng4Average}</p>
                    <hr/>
                    <p><strong>Ring 1 OD &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp; 1:</strong> {copper01.rng1od1} 
                    <strong className="ring2">2:</strong> {copper01.rng1od2} 
                    <strong className="ring2">Avg:</strong> {copper01.rng1odAverage}</p>
                    <hr/>
                    <p><strong>Ring 2 OD &emsp;&emsp;&emsp;&emsp;&emsp;&ensp; 1:</strong> {copper01.rng2od1} 
                    <strong className="ring2">2:</strong> {copper01.rng2od2} 
                    <strong className="ring2">Avg:</strong> {copper01.rng2odAverage}</p>
                    <hr/>
                    <p><strong>Ring 3 OD &emsp;&emsp;&emsp; 1:</strong> {copper01.rng3od1} 
                    <strong className="ring2">2:</strong> {copper01.rng3od2} 
                    <strong className="ring2">3:</strong> {copper01.rng3od3} 
                    <strong className="ring2">4:</strong> {copper01.rng3od4} 
                    <strong className="ring2">Avg:</strong> {copper01.rng3odAverage}</p>
                    <hr/>
                    <p><strong>Ring 4 OD &emsp;&emsp;&emsp; 1:</strong> {copper01.rng4od1} 
                    <strong className="ring2">2:</strong> {copper01.rng4od2} 
                    <strong className="ring2">3:</strong> {copper01.rng4od3} 
                    <strong className="ring2">4:</strong> {copper01.rng4od4} 
                    <strong className="ring2">Avg:</strong> {copper01.rng4odAverage}</p>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default Copper01Details