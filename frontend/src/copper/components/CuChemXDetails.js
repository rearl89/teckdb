import { useState } from "react"
import { useCuChemXContext } from "../hooks/useCuChemXContext"
import CuChemXEditModal from "./CuChemXEditModal"
import format from 'date-fns/format'

const CuChemXDetails = ({cuChemX}) => {

    const { dispatch } = useCuChemXContext()
    
    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/cuChemX/' + cuChemX._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CUCHEMX', payload: json})
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
                    <strong>Batch ID:</strong> {cuChemX.batchID} &emsp;&emsp;
                    <strong>Anode #:</strong> {cuChemX.anode} &emsp;&emsp;
                    <strong>Date:</strong> {format(new Date(cuChemX.createdAt), 'MM-dd-yyyy')}
                </h4>
                <div>
                    <p><strong>Weight:</strong> {cuChemX.weight} &emsp;&emsp;&emsp;&emsp;&emsp;
                    <strong>Thickness:</strong> {cuChemX.thickness} &emsp;&emsp;&emsp;&emsp;
                    <strong>Pass Visual? </strong> {cuChemX.visualPass}</p>
                </div>
            </div>
                <hr/>
            <p><strong>Comment:</strong> {cuChemX.comment}</p>

            <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <div className="delete-confirmation">
                    <p style={{fontSize: '1.2rem', color: 'red'}}>Are you sure you want to delete this entry?</p>
                    <button onClick={handleDeleteConfirm}>Delete</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            )}
            
            {/* modal code */}
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
            {isModalOpen && (
                <CuChemXEditModal
                    cuChemX={cuChemX}
                    closeModal={closeModal}
                />
            )}
            
        </div>
    )
}

export default CuChemXDetails