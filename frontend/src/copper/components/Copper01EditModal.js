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
    rng1Average: copper01.rng1Average,
    rng2b: copper01.rng2b,
    rng2m: copper01.rng2m,
    rng2t: copper01.rng2t,
    rng2Average: copper01.rng2Average,
    rng3b: copper01.rng3b,
    rng3m: copper01.rng3m,
    rng3t: copper01.rng3t,
    rng3Average: copper01.rng3Average,
    rng4b: copper01.rng4b,
    rng4m: copper01.rng4m,
    rng4t: copper01.rng4t,
    rng4Average: copper01.rng4Average,
    rng1od1: copper01.rng1od1,
    rng1od2: copper01.rng1od2,
    rng1odAverage: copper01.rng1odAverage,
    rng2od1: copper01.rng2od1,
    rng2od2: copper01.rng2od2,
    rng2odAverage: copper01.rng2odAverage,
    rng3od1: copper01.rng3od1,
    rng3od2: copper01.rng3od2,
    rng3od3: copper01.rng3od3,
    rng3od4: copper01.rng3od4,
    rng3odAverage: copper01.rng3odAverage,
    rng4od1: copper01.rng4od1,
    rng4od2: copper01.rng4od2,
    rng4od3: copper01.rng4od3,
    rng4od4: copper01.rng4od4,
    rng4odAverage: copper01.rng4odAverage
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
    if (name === "rng1od1" || name === "rng1od2") {
      updatedData.rng1odAverage = Math.round((updatedData.rng1od1 + updatedData.rng1od2) / 2);
    } else if (name === "rng2od1" || name === "rng2od2") {
      updatedData.rng2odAverage = Math.round((updatedData.rng2od1 + updatedData.rng2od2) / 2);
    } else if (name === "rng3od1" || name === "rng3od2" || name === "rng3od3" || name === "rng3od4") {
      updatedData.rng3odAverage = Math.round((updatedData.rng3od1 + updatedData.rng3od2 + updatedData.rng3od3 + updatedData.rng3od4) / 4);
    } else if (name === "rng4od1" || name === "rng4od2" || name === "rng4od3" || name === "rng4od4") {
      updatedData.rng4odAverage = Math.round((updatedData.rng4od1 + updatedData.rng4od2 + updatedData.rng4od3 + updatedData.rng4od4) / 4);
    }
  
    setEditedData(updatedData);
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
        // Dispatch the "UPDATE_COPPER01" action with the updated copper01 data
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
            Average: {Math.round((editedData.rng1od1 + editedData.rng1od2) / 2)}
          </label>
          <br/>
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
            Average: {Math.round((editedData.rng2od1 + editedData.rng2od2) / 2)}
          </label>
          <br/>
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
            Average: {Math.round((editedData.rng3od1 + editedData.rng3od2 + editedData.rng3od3 + editedData.rng3od4) / 4)}
          </label>
          <br/>
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
          <label>
            Average: {Math.round((editedData.rng4od1 + editedData.rng4od2 + editedData.rng4od3 + editedData.rng4od4) / 4)}
          </label>
          <br/>
          <br/>
          <div className="modal-footer2">
            <span className="modal-button" onClick={handleSave}>Save</span>
            <span className="modal-button" onClick={handleCancel}>Close</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copper01EditModal;