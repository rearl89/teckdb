import React from "react";

const DeleteConfirmationModal = ({ batchID, handleDeleteConfirm, handleCancelDelete }) => {
    return (
        <div className="delete-confirmation-modal">
            <div className="delete-confirmation-content">
                Are you sure you want to delete <strong>{batchID}</strong>?
                <br/>
                <button onClick={handleDeleteConfirm}>Yes</button>
                <button onClick={handleCancelDelete}>No</button>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;