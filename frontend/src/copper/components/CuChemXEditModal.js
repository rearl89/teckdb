import { useState } from "react";
import { useCuChemXContext } from "../hooks/useCuChemXContext";

const CuChemXEditModal = ({ cuChemX, closeModal }) => {
  const { dispatch } = useCuChemXContext();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: cuChemX.batchID,
    anode: cuChemX.anode,
    weight: cuChemX.weight,
    thickness: cuChemX.thickness,
    visualPass: cuChemX.visualPass,
    comment: cuChemX.comment,
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
      const response = await fetch(`/cuChemX/${cuChemX._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_SN_NEXX" action with the updated sn_nexx data
        dispatch({ type: "UPDATE_CUCHEMX", payload: json });
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
          <h2>Edit Cu ChemX</h2>
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
              type="text"
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
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuChemXEditModal;