import { useState } from "react";
import { useSnNexxContext } from "../hooks/useSnNexxContext";

const SnNexxForm = () => {
  const { dispatch } = useSnNexxContext();

  const initialInputData = {
    batchID: '',
    weight: '',
    thickness: '',
    visualPass: '',
    comment: '',
  };

  const [inputData, setInputData] = useState(Array.from({ length: 1 }, () => ({ ...initialInputData })));
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleDropdownChange = (e) => {
    const number = parseInt(e.target.value, 10);
    setSelectedNumber(number);

    // Adjust inputData length based on the selected number
    setInputData(Array.from({ length: number }, () => ({ ...initialInputData })));
  };

  const handleInputChange = (e, index, field) => {
    const newInputData = [...inputData];
    newInputData[index][field] = e.target.value;
    setInputData(newInputData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (let i = 0; i < selectedNumber; i++) {
      const sn_nexx = inputData[i];

      const response = await fetch('/sn_nexx', {
        method: 'POST',
        body: JSON.stringify(sn_nexx),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      if (response.ok) {
        // Clear the corresponding input fields on successful submission
        const newInputData = [...inputData];
        newInputData[i] = { ...initialInputData };
        setInputData(newInputData);

        setError(null);
        setEmptyFields([]);
        console.log('new anode added', json);
        dispatch({ type: 'CREATE_SN_NEXX', payload: json });
        
        window.location.reload();
      }
    }
    
  };

  const inputRows = inputData.map((input, index) => (
    <div className="snFormGrid" key={index}>
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, 'batchID')}
        value={input.batchID}
        className={emptyFields.includes("batchID") ? "error" : ""}
        placeholder="Batch ID"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, 'weight')}
        value={input.weight}
        step="any"
        className={emptyFields.includes("weight") ? "error" : ""}
        placeholder="Weight"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, 'thickness')}
        value={input.thickness}
        className={emptyFields.includes("thickness") ? "error" : ""}
        placeholder="Thickness"
      />
      <input
        type="text"
        onChange={(e) => handleInputChange(e, index, 'visualPass')}
        value={input.visualPass}
        className={emptyFields.includes("pass visual") ? "error" : ""}
        placeholder="Pass Visual?"
      />
      <input
        type="text"
        onChange={(e) => handleInputChange(e, index, 'comment')}
        value={input.comment}
        className={emptyFields.includes("comment") ? "error" : ""}
        placeholder="Comment"
      />
    </div>
  ));

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div>
        <h2 className="formHeader">Sn NEXX</h2>
        <label>How many anodes are being tested?</label>
        <select value={selectedNumber} onChange={handleDropdownChange}>
          {Array.from({ length: 48 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    <div className="snInputRows">
      {inputRows}
    </div>
      <button className="snSubmit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default SnNexxForm;