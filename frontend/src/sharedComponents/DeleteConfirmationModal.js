import React from "react";

const DeleteConfirmationModal = ({ batchID, handleDeleteConfirm, handleCancelDelete }) => {
    return (
        <div className="delete-confirmation-modal">
            <div className="delete-confirmation-content">
                Are you sure you want to delete <strong>{batchID}</strong>?
                <br/>
                <br/>
                <span onClick={handleDeleteConfirm}>Yes</span>
                <span onClick={handleCancelDelete}>No</span>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;