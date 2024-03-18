import { useState } from "react"
import { useCopper200Context } from "../hooks/useCopper200Context"
import Copper200EditModal from "./Copper200EditModal"
import format from 'date-fns/format'

const Copper200Details = ({copper200}) => {

    const { dispatch } = useCopper200Context()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/copper200/' + copper200._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COPPER200', payload: json})
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
            <div className="cu200AnodeDetails">
                <p>
                    <div>{copper200.batchID}</div>
                    <div>{copper200.set}</div>
                    <div>{format(new Date(copper200.createdAt), 'MM-dd-yyyy')}</div>
                    <div>{copper200.postPass}</div>
                    <div>{copper200.spongePass}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{copper200.rng1b}</div>
                    <div>{copper200.rng1m}</div>
                    <div>{copper200.rng1t}</div>
                    <div>{copper200.rng1Average}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{copper200.rng2b} </div>
                    <div>{copper200.rng2m}</div> 
                    <div>{copper200.rng2t} </div>
                    <div>{copper200.rng2Average}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{copper200.rng3b}</div> 
                    <div>{copper200.rng3m} </div>
                    <div>{copper200.rng3t} </div>
                    <div>{copper200.rng3Average}</div>
                    <div><strong>Ring 4</strong></div>
                    <div>{copper200.rng4b}</div> 
                    <div>{copper200.rng4m}</div> 
                    <div>{copper200.rng4t} </div>
                    <div>{copper200.rng4Average}</div>
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
                <Copper200EditModal
                    copper200={copper200}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Copper200Details