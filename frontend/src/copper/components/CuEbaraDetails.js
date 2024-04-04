import { useState } from "react"
import { useCuEbaraContext } from "../hooks/useCuEbaraContext"
import DeleteConfirmationModal from "../../sharedComponents/DeleteConfirmationModal";
import CuEbaraEditModal from "./CuEbaraEditModal"
import format from 'date-fns/format'

const CuEbaraDetails = ({cuEbara}) => {

    const { dispatch } = useCuEbaraContext()
    
    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/cuEbara/' + cuEbara._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CUEbara', payload: json})
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
                {/* <hr/> */}
                    <p>
                        <div>{cuEbara.batchID}</div>
                        <div>{cuEbara.anode}</div>
                        <div>{format(new Date(cuEbara.createdAt), 'MM-dd-yyyy')}</div>
                        <div>{cuEbara.weight}</div>
                        <div>{cuEbara.thickness}</div>
                        <div>{cuEbara.visualPass}</div>
                        <div>{cuEbara.comment}</div>
                    </p>
                    <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                    <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
                </div>

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={cuEbara.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}
            
            {/* modal code */}
            {isModalOpen && (
                <CuEbaraEditModal
                    cuEbara={cuEbara}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default CuEbaraDetails