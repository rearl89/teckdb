import { useState } from "react";
import { useCopper01Context } from "../hooks/useCopper01Context";

const Copper01EditModal = ({ copper01, closeModal }) => {
  const { dispatch } = useCopper01Context();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: copper01.batchID,
    set: copper01.set,
    postPass: copper01.postPass,
    spongePass: copper01.spongePass,
    rng1b: copper01.rng1b,
    rng1m: copper01.rng1m,
    rng1t: copper01.rng1t,
    rng2b: copper01.rng2b,
    rng2m: copper01.rng2m,
    rng2t: copper01.rng2t,
    rng3b: copper01.rng3b,
    rng3m: copper01.rng3m,
    rng3t: copper01.rng3t,
    rng4b: copper01.rng4b,
    rng4m: copper01.rng4m,
    rng4t: copper01.rng4t,
    rng1od1: copper01.rng1od1,
    rng1od2: copper01.rng1od2,
    rng2od1: copper01.rng2od1,
    rng2od2: copper01.rng2od2,
    rng3od1: copper01.rng3od1,
    rng3od2: copper01.rng3od2,
    rng3od3: copper01.rng3od3,
    rng3od4: copper01.rng3od4,
    rng4od1: copper01.rng4od1,
    rng4od2: copper01.rng4od2,
    rng4od3: copper01.rng4od3,
    rng4od4: copper01.rng4od4
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
      const response = await fetch(`/copper01/${copper01._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_SN_NEXX" action with the updated sn_nexx data
        dispatch({ type: "UPDATE_COPPER01", payload: json });
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
          <h2>Edit Copper 01</h2>
          <label>
            <strong>Batch ID: {copper01.batchID} &emsp;&emsp;&emsp;&emsp; Set #: {copper01.set}</strong>
          </label>
          <hr/>
          <label>
          Pass Post?
            <input
              type="text"
              name="postPass"
              value={editedData.postPass}
              onChange={handleChange}
            />
          </label>
          <label>
          Pass Sponge?
            <input
              type="text"
              name="spongePass"
              value={editedData.spongePass}
              onChange={handleChange}
            />
          </label>
          <label>
            Ring 1
          </label>
          <label>
          Bottom:
            <input
              type="number"
              name="rng1b"
              value={editedData.rng1b}
              onChange={handleChange}
            />
          </label>
          <label>
            Middle:
            <input
              type="number"
              name="rng1m"
              value={editedData.rng1m}
              onChange={handleChange}
            />
          </label>
          <label>
            Top:
            <input
              type="number"
              name="rng1t"
              value={editedData.rng1t}
              onChange={handleChange}
            />
          </label>
          <label>
            Ring 2
          </label>
          <label>
            Bottom:
            <input
              type="number"
              name="rng2b"
              value={editedData.rng2b}
              onChange={handleChange}
            />
          </label>
          <label>
            Middle:
            <input
              type="number"
              name="rng2m"
              value={editedData.rng2m}
              onChange={handleChange}
            />
          </label>
          <label>
            Top:
            <input
              type="number"
              name="rng2t"
              value={editedData.rng2t}
              onChange={handleChange}
            />
          </label>
          <label>
            Ring 3
          </label>
          <label>
            Bottom:
            <input
              type="number"
              name="rng3b"
              value={editedData.rng3b}
              onChange={handleChange}
            />
          </label>
          <label>
            Middle:
            <input
              type="number"
              name="rng3m"
              value={editedData.rng3m}
              onChange={handleChange}
            />
          </label>
          <label>
            Top:
            <input
              type="number"
              name="rng3t"
              value={editedData.rng3t}
              onChange={handleChange}
            />
          </label>
          <label>
            Ring 4
          </label>
          <label>
            Bottom:
            <input
              type="number"
              name="rng4b"
              value={editedData.rng4b}
              onChange={handleChange}
            />
          </label>
          <label>
            Middle:
            <input
              type="number"
              name="rng4m"
              value={editedData.rng4m}
              onChange={handleChange}
            />
          </label>
          <label>
            Top:
            <input
              type="number"
              name="rng4t"
              value={editedData.rng4t}
              onChange={handleChange}
            />
          </label>
          <label>
              Ring 1
          </label>
          <label>
              OD1:
              <input
                  type="number"
                  name="rng1od1"
                  value={editedData.rng1od1}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD2:
              <input
                  type="number"
                  name="rng1od2"
                  value={editedData.rng1od2}
                  onChange={handleChange}
              />
          </label>
          <label>
              Ring 2
          </label>
          <label>
              OD1:
              <input
                  type="number"
                  name="rng2od1"
                  value={editedData.rng2od1}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD2:
              <input
                  type="number"
                  name="rng2od2"
                  value={editedData.rng2od2}
                  onChange={handleChange}
              />
          </label>
          <label>
              Ring 3
          </label>
          <label>
              OD1:
              <input
                  type="number"
                  name="rng3od1"
                  value={editedData.rng3od1}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD2:
              <input
                  type="number"
                  name="rng3od2"
                  value={editedData.rng3od2}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD3:
              <input
                  type="number"
                  name="rng3od3"
                  value={editedData.rng3od3}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD4:
              <input
                  type="number"
                  name="rng3od4"
                  value={editedData.rng3od4}
                  onChange={handleChange}
              />
          </label>
          <label>
              Ring 4
          </label>
          <label>
              OD1:
              <input
                  type="number"
                  name="rng4od1"
                  value={editedData.rng4od1}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD2:
              <input
                  type="number"
                  name="rng4od2"
                  value={editedData.rng4od2}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD3:
              <input
                  type="number"
                  name="rng4od3"
                  value={editedData.rng4od3}
                  onChange={handleChange}
              />
          </label>
          <label>
              OD4:
              <input
                  type="number"
                  name="rng4od4"
                  value={editedData.rng4od4}
                  onChange={handleChange}
              />
          </label>
          <div className="modal-footer">
            <button className="modal-button" onClick={handleSave}>Save</button>
            <button className="modal-button" onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copper01EditModal;