import { useState } from "react"
import { useCopper09Context } from "../hooks/useCopper09Context"
import DeleteConfirmationModal from "../../sharedComponents/DeleteConfirmationModal";
import Copper09EditModal from "./Copper09EditModal"
import format from 'date-fns/format'

const Copper09Details = ({copper09}) => {

    const { dispatch } = useCopper09Context()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/copper09/' + copper09._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COPPER09', payload: json})
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
            <div className="cu09AnodeDetails">
                <p>
                    <div>{copper09.batchID}</div>
                    <div>{copper09.set}</div>
                    <div>{format(new Date(copper09.createdAt), 'MM-dd-yyyy')}</div>
                    <div>{copper09.postPass}</div>
                    <div>{copper09.spongePass}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{copper09.rng1b}</div>
                    <div>{copper09.rng1m}</div>
                    <div>{copper09.rng1t}</div>
                    <div>{copper09.rng1Average}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{copper09.rng2b} </div>
                    <div>{copper09.rng2m}</div> 
                    <div>{copper09.rng2t} </div>
                    <div>{copper09.rng2Average}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{copper09.rng3b}</div> 
                    <div>{copper09.rng3m} </div>
                    <div>{copper09.rng3t} </div>
                    <div>{copper09.rng3Average}</div>
                    <div><strong>Ring 4</strong></div>
                    <div>{copper09.rng4b}</div> 
                    <div>{copper09.rng4m}</div> 
                    <div>{copper09.rng4t} </div>
                    <div>{copper09.rng4Average}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{copper09.rng1od1} </div>
                    <div>{copper09.rng1od2} </div>
                    <div>{copper09.rng1odAverage}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{copper09.rng2od1} </div>
                    <div>{copper09.rng2od2} </div>
                    <div>{copper09.rng2odAverage}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{copper09.rng3od1} </div>
                    <div>{copper09.rng3od2} </div>
                    <div>{copper09.rng3odAverage}</div>
                    <div><strong>Ring 4</strong></div>
                    <div>{copper09.rng4od1} </div>
                    <div>{copper09.rng4od2}</div>
                    <div>{copper09.rng4odAverage}</div>
                </p>
                <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={copper09.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}

            {/* modal code */}
            
            {isModalOpen && (
                <Copper09EditModal
                    copper09={copper09}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Copper09Details