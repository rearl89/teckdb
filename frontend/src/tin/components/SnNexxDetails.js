import { useState } from "react"
import { useSnNexxContext } from "../hooks/useSnNexxContext"
import SnNexxEditModal from "./SnNexxEditModal"
import format from 'date-fns/format'

const SnNexxDetails = ({sn_nexx}) => {

    const { dispatch } = useSnNexxContext()
    
    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/sn_nexx/' + sn_nexx._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_SN_NEXX', payload: json})
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
        <div className="anode-details">
            <div>
                <h4>
                    <strong>Batch ID:</strong> {sn_nexx.batchID} &emsp;&emsp;
                    <strong>Anode #:</strong> {sn_nexx.anode} &emsp;&emsp;
                    <strong>Date:</strong> {format(new Date(sn_nexx.createdAt), 'MM-dd-yyyy')}
                </h4>
                <div>
                    <p><strong>Weight:</strong> {sn_nexx.weight} &emsp;&emsp;&emsp;&emsp;&emsp;
                    <strong>Thickness:</strong> {sn_nexx.thickness} &emsp;&emsp;&emsp;&emsp;
                    <strong>Pass Visual? </strong> {sn_nexx.visualPass}</p>
                </div>
            </div>
                <hr/>
            <p><strong>Comment:</strong> {sn_nexx.comment}</p>

            <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <div className="delete-confirmation">
                    <p className="deleteAlert">Are you sure you want to delete this entry?</p>
                    <button onClick={handleDeleteConfirm}>Delete</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            )}
            
            {/* modal code */}
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            {isModalOpen && (
                <SnNexxEditModal
                    sn_nexx={sn_nexx}
                    closeModal={closeModal}
                />
            )}
            
        </div>
    )
}

export default SnNexxDetails