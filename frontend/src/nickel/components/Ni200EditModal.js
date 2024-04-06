import { useState } from "react";
import { useNi200Context } from "../hooks/useNi200Context";

const Ni200EditModal = ({ ni200, closeModal }) => {
  const { dispatch } = useNi200Context();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: ni200.batchID,
    set: ni200.set,
    postPass: ni200.postPass,
    spongePass: ni200.spongePass,
    rng1b: ni200.rng1b,
    rng1m: ni200.rng1m,
    rng1t: ni200.rng1t,
    rng1Average: ni200.rng1Average,
    rng2b: ni200.rng2b,
    rng2m: ni200.rng2m,
    rng2t: ni200.rng2t,
    rng2Average: ni200.rng2Average,
    rng3b: ni200.rng3b,
    rng3m: ni200.rng3m,
    rng3t: ni200.rng3t,
    rng3Average: ni200.rng3Average,
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditedData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    // Check if the input represents a numeric value
    if (!isNaN(value)) {
      updatedValue = parseFloat(value); // Parse the numeric value
    }

    const updatedData = { ...editedData, [name]: updatedValue };
    
    // Calculate and update the "Ring 1 Average" when "Bottom," "Middle," or "Top" changes
    if (name === "rng1b" || name === "rng1m" || name === "rng1t") {
      updatedData.rng1Average = Math.round((updatedData.rng1b + updatedData.rng1m + updatedData.rng1t) / 3);
    }
    if (name === "rng2b" || name === "rng2m" || name === "rng2t") {
      updatedData.rng2Average = Math.round((updatedData.rng2b + updatedData.rng2m + updatedData.rng2t) / 3);
    } else if (name === "rng3b" || name === "rng3m" || name === "rng3t") {
      updatedData.rng3Average = Math.round((updatedData.rng3b + updatedData.rng3m + updatedData.rng3t) / 3);
    }
  
    setEditedData(updatedData);
  };

  const handleSave = async () => {
    try {
      // Send the updated data to the server
      const response = await fetch(`/ni200/${ni200._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_COPPER200" action with the updated copper200 data
        dispatch({ type: "UPDATE_NI200", payload: json });
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
          <h2>Edit Nickel 200-3</h2>
          <label>
            <strong>Batch ID: {ni200.batchID} &emsp;&emsp;&emsp;&emsp; Set #: {ni200.set}</strong>
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
            Average: {Math.round((editedData.rng1b + editedData.rng1m + editedData.rng1t) / 3)}
          </label>
          <br/>
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
            Average: {Math.round((editedData.rng2b + editedData.rng2m + editedData.rng2t) / 3)}
          </label>
          <br/>
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
            Average: {Math.round((editedData.rng3b + editedData.rng3m + editedData.rng3t) / 3)}
          </label>
          <br/>
          <br/>
          <div className="modal-footer">
            <span className="modal-button" onClick={handleSave}>Save</span>
            <span className="modal-button" onClick={handleCancel}>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ni200EditModal;