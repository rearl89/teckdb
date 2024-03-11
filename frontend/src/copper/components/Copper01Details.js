import { useState } from "react"
import { useCopper01Context } from "../hooks/useCopper01Context"
import Copper01EditModal from "./Copper01EditModal"
import format from 'date-fns/format'

const Copper01Details = ({copper01}) => {

    const { dispatch } = useCopper01Context()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/copper01/' + copper01._id, {
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

    //delete alert
    const handleDeleteClick = () => {
        setShowDeleteConfirmation(true);
    }

    const handleDeleteConfirm = () => {
        handleClick(); // Call delete function
        setShowDeleteConfirmation(false); // Close confirmation dialog after delete
    }

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false); // Close confirmation dialog
    }

    return (
        <div>
            <div className="cu01AnodeDetails">
                <p>
                    <div>{copper01.batchID}</div>
                    <div>{copper01.set}</div>
                    <div>{format(new Date(copper01.createdAt), 'MM-dd-yyyy')}</div>
                    <div>{copper01.postPass}</div>
                    <div>{copper01.spongePass}</div>
                    <div></div>
                    <div>{copper01.rng1b}</div>
                    <div>{copper01.rng1m}</div>
                    <div>{copper01.rng1t}</div>
                    <div>{copper01.rng1Average}</div>
                    <div></div>
                    <div>{copper01.rng2b} </div>
                    <div>{copper01.rng2m}</div> 
                    <div>{copper01.rng2t} </div>
                    <div>{copper01.rng2Average}</div>
                    <div></div>
                    <div>{copper01.rng3b}</div> 
                    <div>{copper01.rng3m} </div>
                    <div>{copper01.rng3t} </div>
                    <div>{copper01.rng3Average}</div>
                    <div></div>
                    <div>{copper01.rng4b}</div> 
                    <div>{copper01.rng4m}</div> 
                    <div>{copper01.rng4t} </div>
                    <div>{copper01.rng4Average}</div>
                    <div></div>
                    <div>{copper01.rng1od1} </div>
                    <div>{copper01.rng1od2} </div>
                    <div>{copper01.rng1odAverage}</div>
                    <div></div>
                    <div>{copper01.rng2od1} </div>
                    <div>{copper01.rng2od2} </div>
                    <div>{copper01.rng2odAverage}</div>
                    <div></div>
                    <div>{copper01.rng3od1} </div>
                    <div>{copper01.rng3od2} </div>
                    <div>{copper01.rng3od3} </div>
                    <div>{copper01.rng3od4} </div>
                    <div>{copper01.rng3odAverage}</div>
                    <div></div>
                    <div>{copper01.rng4od1} </div>
                    <div>{copper01.rng4od2}</div>
                    <div>{copper01.rng4od3}</div>
                    <div>{copper01.rng4od4}</div>
                    <div>{copper01.rng4odAverage}</div>
                </p>
                <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <div className="delete-confirmation">
                    <p style={{fontSize: '1.2rem', color: 'red'}}>Are you sure you want to delete this entry?</p>
                    <button onClick={handleDeleteConfirm}>Delete</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            )}

            {/* modal code */}
            
            {isModalOpen && (
                <Copper01EditModal
                    copper01={copper01}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Copper01Details