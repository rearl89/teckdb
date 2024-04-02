import { useState } from "react"
import { useCopper05Context } from "../hooks/useCopper05Context"
import Copper05EditModal from "./Copper05EditModal"
import format from 'date-fns/format'

const Copper05Details = ({copper05}) => {

    const { dispatch } = useCopper05Context()

    const [isModalOpen, setIsModalOpen] = useState(false); //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // New state to manage delete confirmation dialog

    const handleClick = async () => {
        const response = await fetch('/copper05/' + copper05._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COPPER01', payload: json})
        }
    }
    //modal
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
        <div className="cu05AnodeDetails">
            <p>
                <div>{copper05.batchID}</div>
                <div>{copper05.set}</div>
                <div>{format(new Date(copper05.createdAt), 'MM-dd-yyyy')}</div>
                <div>{copper05.postPass}</div>
                <div>{copper05.spongePass}</div>
                <div>Ring 1</div>
                <div>{copper05.rng1b}</div>
                <div>{copper05.rng1m}</div>
                <div>{copper05.rng1t}</div>
                <div>{copper05.rng1Average}</div>
                <div>Ring 2</div>
                <div>{copper05.rng2b}</div>
                <div>{copper05.rng2t}</div>
                <div>{copper05.rng2m}</div>
                <div>{copper05.rng2Average}</div>
                <div>Ring 3</div>
                <div>{copper05.rng3b}</div>
                <div>{copper05.rng3m}</div>
                <div>{copper05.rng3t}</div>
                <div>{copper05.rng3Average}</div>
                <div>Ring 4</div>
                <div>{copper05.rng4b}</div>
                <div>{copper05.rng4m}</div>
                <div>{copper05.rng4t}</div>
                <div>{copper05.rng4Average}</div>
                <div>{copper05.rng1coat}</div>
                <div>{copper05.rng2coat}</div>
                <div>{copper05.rng3coat}</div>
                <div>{copper05.rng4coat}</div>
            </p>
            
            {/* modal code */}
            <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
            {isModalOpen && (
                <Copper05EditModal
                    copper05={copper05}
                    closeModal={closeModal}
                />
            )}

            <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <div className="delete-confirmation">
                    <p style={{fontSize: '1.2rem', color: 'red'}}>Are you sure you want to delete this entry?</p>
                    <button onClick={handleDeleteConfirm}>Delete</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            )}

            
        </div>
    )
}

export default Copper05Details