import { useState } from "react";
import { useCuEbaraContext } from "../hooks/useCuEbaraContext";

const CuEbaraEditModal = ({ cuEbara, closeModal }) => {
  const { dispatch } = useCuEbaraContext();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: cuEbara.batchID,
    anode: cuEbara.anode,
    weight: cuEbara.weight,
    thickness: cuEbara.thickness,
    visualPass: cuEbara.visualPass,
    comment: cuEbara.comment,
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
      const response = await fetch(`/cuEbara/${cuEbara._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_SN_NEXX" action with the updated sn_nexx data
        dispatch({ type: "UPDATE_CUEbara", payload: json });
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
          <h2>Edit Cu Ebara</h2>
          <label>
            <strong>Batch ID: {cuEbara.batchID} &emsp;&emsp;&emsp;&emsp; Set #: {cuEbara.anode}</strong>
          </label>
          <hr/>
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

export default CuEbaraEditModal;