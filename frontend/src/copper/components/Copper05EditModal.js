import { useState } from "react";
import { useCopper05Context } from "../hooks/useCopper05Context";

const Copper05EditModal = ({ copper05, closeModal }) => {
  const { dispatch } = useCopper05Context();

  // State to track the edited values
  const [editedData, setEditedData] = useState({
    batchID: copper05.batchID,
    set: copper05.set,
    postPass: copper05.postPass,
    spongePass: copper05.spongePass,
    rng1b: copper05.rng1b,
    rng1m: copper05.rng1m,
    rng1t: copper05.rng1t,
    rng1Average: copper05.rng1Average,
    rng2b: copper05.rng2b,
    rng2m: copper05.rng2m,
    rng2t: copper05.rng2t,
    rng2Average: copper05.rng2Average,
    rng3b: copper05.rng3b,
    rng3m: copper05.rng3m,
    rng3t: copper05.rng3t,
    rng3Average: copper05.rng3Average,
    rng4b: copper05.rng4b,
    rng4m: copper05.rng4m,
    rng4t: copper05.rng4t,
    rng4Average: copper05.rng4Average,
    rng1coat: copper05.rng1coat,
    rng2coat: copper05.rng2coat,
    rng3coat: copper05.rng3coat,
    rng4coat: copper05.rng4coat
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
    } else if (name === "rng4b" || name === "rng4m" || name === "rng4t") {
      updatedData.rng4Average = Math.round((updatedData.rng4b + updatedData.rng4m + updatedData.rng4t) / 3);
    }
    
  
    setEditedData(updatedData);
  };

  const handleSave = async () => {
    try {
      // Send the updated data to the server
      const response = await fetch(`/copper05/${copper05._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      const json = await response.json();

      if (response.ok) {
        // Dispatch the "UPDATE_COPPER05" action with the updated copper05 data
        dispatch({ type: "UPDATE_COPPER05", payload: json });
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
          <h2>Edit Copper 05</h2>
          <label>
            <strong>Batch ID: {copper05.batchID} &emsp;&emsp;&emsp;&emsp; Set #: {copper05.set}</strong>
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
            Average: {Math.round((editedData.rng4b + editedData.rng4m + editedData.rng4t) / 3)}
          </label>
          <br/>
          <label>
              Ring 1
          </label>
          <label>
              Coating:
              <input
                  type="number"
                  name="rng1coat"
                  value={editedData.rng1coat}
                  onChange={handleChange}
              />
          </label>
          <br/>
          <label>
              Ring 2
          </label>
          <label>
              Coating:
              <input
                  type="number"
                  name="rng2coat"
                  value={editedData.rng2coat}
                  onChange={handleChange}
              />
          </label>
          <br/>
          <label>
              Ring 3
          </label>
          <label>
              Coating:
              <input
                  type="number"
                  name="rng3coat"
                  value={editedData.rng3coat}
                  onChange={handleChange}
              />
          </label>
          <br/>
          <label>
              Ring 4
          </label>
          <label>
              Coating:
              <input
                  type="number"
                  name="rng4coat"
                  value={editedData.rng4coat}
                  onChange={handleChange}
              />
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

export default Copper05EditModal;