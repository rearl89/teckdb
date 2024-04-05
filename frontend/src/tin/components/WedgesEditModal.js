import { useState } from "react";
import { useWedgesContext } from "../hooks/useWedgesContext";

const WedgesEditModal = ({ wedges, closeModal }) => {
  const { dispatch } = useWedgesContext();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: wedges.batchID,
    anode: wedges.anode,
    weight: wedges.weight,
    thickness: wedges.thickness,
    visualPass: wedges.visualPass,
    comment: wedges.comment,
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
      const response = await fetch(`/wedges/${wedges._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_WEDGES" action with the updated wedges data
        dispatch({ type: "UPDATE_WEDGES", payload: json });
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
          <h2>Edit Sn Wedges</h2>
          <label>
            <strong>Batch ID: {wedges.batchID} &emsp;&emsp;&emsp;&emsp; Set #: {wedges.anode}</strong>
          </label>
          <hr/>
          <label>
            Weight 1:
            <input
              type="number"
              name="weight1"
              value={editedData.weight1}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight 2:
            <input
              type="number"
              name="weight2"
              value={editedData.weight2}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight 3:
            <input
              type="number"
              name="weight3"
              value={editedData.weight3}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight 4:
            <input
              type="number"
              name="weight4"
              value={editedData.weight4}
              onChange={handleChange}
            />
          </label>
          <label>
            Weight 5:
            <input
              type="number"
              name="weight5"
              value={editedData.weight5}
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

export default WedgesEditModal;