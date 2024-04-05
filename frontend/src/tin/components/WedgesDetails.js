import { useState } from "react"
import { useWedgesContext } from "../hooks/useWedgesContext"
import DeleteConfirmationModal from "../../sharedComponents/DeleteConfirmationModal";
import WedgesEditModal from "./WedgesEditModal"
import format from 'date-fns/format'

const WedgesDetails = ({wedges}) => {

    const { dispatch } = useWedgesContext()
    
    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/wedges/' + wedges._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WEDGES', payload: json})
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
                <div className="anode-details2">
                    <p>
                        <div>{wedges.batchID}</div>
                        <div>{wedges.anode}</div>
                        <div>{format(new Date(wedges.createdAt), 'MM-dd-yyyy')}</div>
                        <div>{wedges.weight1}</div>
                        <div>{wedges.weight2}</div>
                        <div>{wedges.weight3}</div>
                        <div>{wedges.weight4}</div>
                        <div>{wedges.weight5}</div>
                        <div>{wedges.thickness}</div>
                        <div>{wedges.visualPass}</div>
                        <div>{wedges.comment}</div>
                    </p>
                    <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                    <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
                </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={wedges.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}
            
            {/* modal code */}
            
            {isModalOpen && (
                <WedgesEditModal
                    wedges={wedges}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default WedgesDetails