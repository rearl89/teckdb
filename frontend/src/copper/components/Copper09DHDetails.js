import { useState } from "react"
import { useCopper09DHContext } from "../hooks/useCopper09DHContext"
import DeleteConfirmationModal from "../../sharedComponents/DeleteConfirmationModal";
import Copper09DHEditModal from "./Copper09DHEditModal"
import format from 'date-fns/format'

const Copper09DHDetails = ({copper09DH}) => {

    const { dispatch } = useCopper09DHContext()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/copper09DH/' + copper09DH._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_COPPER09DH', payload: json})
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
            <div className="cu09DHAnodeDetails">
                <p>
                    <div>{copper09DH.batchID}</div>
                    <div>{copper09DH.set}</div>
                    <div>{format(new Date(copper09DH.createdAt), 'MM-dd-yyyy')}</div>
                    <div>{copper09DH.postPass}</div>
                    <div>{copper09DH.spongePass}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{copper09DH.rng1b}</div>
                    <div>{copper09DH.rng1m}</div>
                    <div>{copper09DH.rng1t}</div>
                    <div>{copper09DH.rng1Average}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{copper09DH.rng2b} </div>
                    <div>{copper09DH.rng2m}</div> 
                    <div>{copper09DH.rng2t} </div>
                    <div>{copper09DH.rng2Average}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{copper09DH.rng3b}</div> 
                    <div>{copper09DH.rng3m} </div>
                    <div>{copper09DH.rng3t} </div>
                    <div>{copper09DH.rng3Average}</div>
                    <div><strong>Ring 4</strong></div>
                    <div>{copper09DH.rng4b}</div> 
                    <div>{copper09DH.rng4m}</div> 
                    <div>{copper09DH.rng4t} </div>
                    <div>{copper09DH.rng4Average}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{copper09DH.rng1od1} </div>
                    <div>{copper09DH.rng1od2} </div>
                    <div>{copper09DH.rng1odAverage}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{copper09DH.rng2od1} </div>
                    <div>{copper09DH.rng2od2} </div>
                    <div>{copper09DH.rng2odAverage}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{copper09DH.rng3od1} </div>
                    <div>{copper09DH.rng3od2} </div>
                    <div>{copper09DH.rng3odAverage}</div>
                    <div><strong>Ring 4</strong></div>
                    <div>{copper09DH.rng4od1} </div>
                    <div>{copper09DH.rng4od2}</div>
                    <div>{copper09DH.rng4odAverage}</div>
                </p>
                <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <DeleteConfirmationModal
                    batchID={copper09DH.batchID}
                    handleDeleteConfirm={handleDeleteConfirm}
                    handleCancelDelete={handleCancelDelete}
                />
            )}

            {/* modal code */}
            
            {isModalOpen && (
                <Copper09DHEditModal
                    copper09DH={copper09DH}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Copper09DHDetails