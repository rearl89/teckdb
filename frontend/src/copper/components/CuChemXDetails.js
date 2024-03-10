import { useState } from "react"
import { useCuChemXContext } from "../hooks/useCuChemXContext"
import DeleteConfirmationModal from "./DeleteConfirmationModal";
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
        <div>
                <div className="anode-details2">
                {/* <hr/> */}
                    <p>
                        <div>{cuChemX.batchID}</div>
                        <div>{cuChemX.anode}</div>
                        <div>{format(new Date(cuChemX.createdAt), 'MM-dd-yyyy')}</div>
                        <div>{cuChemX.weight}</div>
                        <div>{cuChemX.thickness}</div>
                        <div>{cuChemX.visualPass}</div>
                        <div>{cuChemX.comment}</div>
                    </p>
                    <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                    <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
                </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={cuChemX.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}
            
            {/* modal code */}
            
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