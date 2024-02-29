import { useState } from "react"
import { useCopper05Context } from "../hooks/useCopper05Context"
import Copper05EditModal from "./Copper05EditModal"
import format from 'date-fns/format'

const Copper05Details = ({copper05}) => {

    const { dispatch } = useCopper05Context()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code

    const handleClick = async () => {
        const response = await fetch('/copper05/' + copper05._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COPPER01', payload: json})
        }
    }
    //modal code
    const handleEditClick = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="anode-details">
            <h4>Batch ID: {copper05.batchID} &emsp;&emsp; Set #: {copper05.set} &emsp;&emsp; Date: {format(new Date(copper05.createdAt), 'MM-dd-yyyy')}</h4>
                    
                    <p><strong>Pass Post:</strong> {copper05.postPass} &emsp;&emsp;&emsp;
                    <strong className="ring2">Sponge Pass:</strong> {copper05.spongePass}</p>
                    <hr/>
                    <p><strong>Ring 1 &emsp;&emsp;&emsp; b:</strong> {copper05.rng1b}
                    <strong className="ring2">m:</strong> {copper05.rng1m}
                    <strong className="ring2">t:</strong> {copper05.rng1t}
                    <strong className="ring2">Avg:</strong> {copper05.rng1Average}</p>
                    <hr/>
                    <p><strong>Ring 2 &emsp;&emsp;&emsp; b:</strong> {copper05.rng2b} 
                    <strong className="ring2">m:</strong>  {copper05.rng2m} 
                    <strong className="ring2">t:</strong> {copper05.rng2t} 
                    <strong className="ring2">Avg:</strong> {copper05.rng2Average}</p>
                    <hr/>
                    <p><strong>Ring 3  &emsp;&emsp;&emsp; b:</strong> {copper05.rng3b} 
                    <strong className="ring2"g>m:</strong> {copper05.rng3m} 
                    <strong className="ring2">t:</strong> {copper05.rng3t} 
                    <strong className="ring2">Avg:</strong> {copper05.rng3Average}</p>
                    <hr/>
                    <p><strong>Ring 4  &emsp;&emsp;&emsp; b:</strong> {copper05.rng4b} 
                    <strong className="ring2">m:</strong> {copper05.rng4m} 
                    <strong className="ring2">t:</strong> {copper05.rng4t} 
                    <strong className="ring2">Avg:</strong> {copper05.rng4Average}</p>
                    <hr/>
                    <p><strong>Ring 1 Coating:</strong> {copper05.rng1coat}</p>
                    <hr/>
                    <p><strong>Ring 2 Coating:</strong> {copper05.rng2coat}</p>
                    <hr/>
                    <p><strong>Ring 3 Coating:</strong> {copper05.rng3coat}</p>
                    <hr/>
                    <p><strong>Ring 4 Coating:</strong> {copper05.rng4coat}</p>

            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>

            {/* modal code */}
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            {isModalOpen && (
                <Copper05EditModal
                    copper05={copper05}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Copper05Details