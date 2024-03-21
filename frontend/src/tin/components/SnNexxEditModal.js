import { useState } from "react";
import { useSnNexxContext } from "../hooks/useSnNexxContext";

const SnNexxEditModal = ({ sn_nexx, closeModal }) => {
  const { dispatch } = useSnNexxContext();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: sn_nexx.batchID,
    anode: sn_nexx.anode,
    weight: sn_nexx.weight,
    thickness: sn_nexx.thickness,
    visualPass: sn_nexx.visualPass,
    comment: sn_nexx.comment,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      // Send the updated data to the server
      const response = await fetch(`/sn_nexx/${sn_nexx._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_SN_NEXX" action with the updated sn_nexx data
        dispatch({ type: "UPDATE_SN_NEXX", payload: json });
        window.location.reload();
      } else {
        console.error("Error updating data:", json.error);
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  const handleCancel = () => {
    // Close the modal without saving changes
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-scrollable">
          <h2>Edit Sn Nexx</h2>
          <label>
            Batch ID:
            <input
              type="number"
              name="batchID"
              value={editedData.batchID}
              onChange={handleChange}
            />
          </label>
          <label>
            Anode #:
            <input
              type="number"
              name="anode"
              value={editedData.anode}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight:
            <input
              type="number"
              name="weight"
              value={editedData.weight}
              onChange={handleChange}
            />
          </label>
          <label>
            Thickness:
            <input
              type="number"
              name="thickness"
              value={editedData.thickness}
              onChange={handleChange}
            />
          </label>
          <label>
            Pass Visual?
            <input
              type="text"
              name="visualPass"
              value={editedData.visualPass}
              onChange={handleChange}
            />
          </label>
          <label>
            Comment:
            <textarea
              name="comment"
              rows="3"
              value={editedData.comment}
              onChange={handleChange}
            />
          </label>
          <br/>
          <br/>
          <div className="modal-footer">
            <button className="modal-button" onClick={handleSave}>Save</button>
            <button className="modal-button" onClick={handleCancel}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnNexxEditModal;