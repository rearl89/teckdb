import { useState } from "react"
import { useCu200PureContext } from "../hooks/useCu200PureContext"
import Cu200PureEditModal from "./Cu200PureEditModal"
import format from 'date-fns/format'

const Cu200PureDetails = ({cu200Pure}) => {

    const { dispatch } = useCu200PureContext()

    const [isModalOpen, setIsModalOpen] = useState(false) //modal code
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    const handleClick = async () => {
        const response = await fetch('/cu200Pure/' + cu200Pure._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_CU200PURE', payload: json})
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
                    <div>{cu200Pure.batchID}</div>
                    <div>{cu200Pure.set}</div>
                    <div>{format(new Date(cu200Pure.createdAt), 'MM-dd-yyyy')}</div>
                    <div>{cu200Pure.postPass}</div>
                    <div>{cu200Pure.spongePass}</div>
                    <div><strong>Ring 1</strong></div>
                    <div>{cu200Pure.rng1b}</div>
                    <div>{cu200Pure.rng1m}</div>
                    <div>{cu200Pure.rng1t}</div>
                    <div>{cu200Pure.rng1Average}</div>
                    <div><strong>Ring 2</strong></div>
                    <div>{cu200Pure.rng2b} </div>
                    <div>{cu200Pure.rng2m}</div> 
                    <div>{cu200Pure.rng2t} </div>
                    <div>{cu200Pure.rng2Average}</div>
                    <div><strong>Ring 3</strong></div>
                    <div>{cu200Pure.rng3b}</div> 
                    <div>{cu200Pure.rng3m} </div>
                    <div>{cu200Pure.rng3t} </div>
                    <div>{cu200Pure.rng3Average}</div>
                    <div><strong>Ring 4</strong></div>
                    <div>{cu200Pure.rng4b}</div> 
                    <div>{cu200Pure.rng4m}</div> 
                    <div>{cu200Pure.rng4t} </div>
                    <div>{cu200Pure.rng4Average}</div>
                </p>
                <span className="material-symbols-outlined" onClick={handleEditClick}>edit</span>
                <span className="material-symbols-outlined" onClick={handleDeleteClick}>delete</span>
            </div>

            

            {/* Delete confirmation dialog */}
            {showDeleteConfirmation && (
                <div className="delete-confirmation">
                    <p style={{fontSize: '1.2rem', color: 'red'}}>Are you sure you want to delete this entry?</p>
                    <button onClick={handleDeleteConfirm}>Delete</button>
                    <button onClick={handleCancelDelete}>Cancel</button>
                </div>
            )}

            {/* modal code */}
            
            {isModalOpen && (
                <Cu200PureEditModal
                    cu200Pure={cu200Pure}
                    closeModal={closeModal}
                />
            )}
        </div>
    )
}

export default Cu200PureDetails