import { useState } from "react";
import { useNi200Context } from "../hooks/useNi200Context";
import DeleteConfirmationModal from "../../sharedComponents/DeleteConfirmationModal";
import Ni200EditModal from "./Ni200EditModal";
import format from 'date-fns/format';

const Ni200Details = ({ni200}) => {

    const { dispatch } = useNi200Context()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/ni200/' + ni200._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_NI200', payload: json})
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
                    <div>{ni200.batchID}</div>
                    <div>{ni200.set}</div>
                    <div>{format(new Date(ni200.createdAt), 'MM-dd-yyyy')}</div>
                    <div>{ni200.postPass}</div>
                    <div>{ni200.spongePass}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{ni200.rng1b}</div>
                    <div>{ni200.rng1m}</div>
                    <div>{ni200.rng1t}</div>
                    <div>{ni200.rng1Average}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{ni200.rng2b} </div>
                    <div>{ni200.rng2m}</div> 
                    <div>{ni200.rng2t} </div>
                    <div>{ni200.rng2Average}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{ni200.rng3b}</div> 
                    <div>{ni200.rng3m} </div>
                    <div>{ni200.rng3t} </div>
                    <div>{ni200.rng3Average}</div>
                </p>
                <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={ni200.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}
            {/* modal code */}
            
            {isModalOpen && (
                <Ni200EditModal ni200={ni200} closeModal={closeModal} />
            )}
        </div>
    )
}

export default Ni200Details