import { useState } from "react"
import { useSnNexxContext } from "../hooks/useSnNexxContext"
import DeleteConfirmationModal from "../../sharedComponents/DeleteConfirmationModal";
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
        <div>
                <div className="anode-details2">
                    <p>
                        <div>{sn_nexx.batchID}</div>
                        <div>{sn_nexx.anode}</div>
                        <div>{format(new Date(sn_nexx.createdAt), 'MM-dd-yyyy')}</div>
                        <div>{sn_nexx.weight}</div>
                        <div>{sn_nexx.thickness}</div>
                        <div>{sn_nexx.visualPass}</div>
                        <div>{sn_nexx.comment}</div>
                    </p>
                    <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                    <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
                </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={sn_nexx.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}
            
            {/* modal code */}
            
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