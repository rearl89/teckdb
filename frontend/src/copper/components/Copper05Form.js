import { useState } from "react";
import { useCopper05Context } from "../hooks/useCopper05Context";

const Copper05Form = () => {
  const { dispatch } = useCopper05Context();

  const initialInputData = {
    batchID: "",
    postPass: "",
    spongePass: "",
    rng1b: "",
    rng1m: "",
    rng1t: "",
    rng2b: "",
    rng2m: "",
    rng2t: "",
    rng3b: "",
    rng3m: "",
    rng3t: "",
    rng4b: "",
    rng4m: "",
    rng4t: "",
    rng1coat: "",
    rng2coat: "",
    rng3coat: "",
    rng4coat: ""
  };

  const [inputData, setInputData] = useState(
    Array.from({ length: 1 }, () => ({ ...initialInputData }))
  );
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
      const copper05 = inputData[i];

      const response = await fetch("/copper05", {
        method: "POST",
        body: JSON.stringify(copper05),
        headers: {
          "Content-Type": "application/json",
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
        console.log("new anode added", json);
        dispatch({ type: "CREATE_COPPER05", payload: json });
      }
    }
  };

  const inputRows = inputData.map((input, index) => (
    <div className="cuFormGrid" key={index}>
      <input
        type="text"
        onChange={(e) => handleInputChange(e, index, "batchID")}
        value={input.batchID}
        className={emptyFields.includes("batchID") ? "error" : ""}
        placeholder="Batch ID"
      />
      <input
        type="text"
        onChange={(e) => handleInputChange(e, index, "postPass")}
        value={input.postPass}
        className={emptyFields.includes("pass post") ? "error" : ""}
        placeholder="Post?"
      />
      <input
        type="text"
        onChange={(e) => handleInputChange(e, index, "spongePass")}
        value={input.spongePass}
        className={emptyFields.includes("pass sponge") ? "error" : ""}
        placeholder="Sponge?"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng1b")}
        value={input.rng1b}
        className={emptyFields.includes("rng1b") ? "error" : ""}
        placeholder="R1B"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng1m")}
        value={input.rng1m}
        className={emptyFields.includes("rng1m") ? "error" : ""}
        placeholder="R1M"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng1t")}
        value={input.rng1t}
        className={emptyFields.includes("rng1t") ? "error" : ""}
        placeholder="R1T"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng2b")}
        value={input.rng2b}
        className={emptyFields.includes("rng2b") ? "error" : ""}
        placeholder="R2B"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng2m")}
        value={input.rng2m}
        className={emptyFields.includes("rng2m") ? "error" : ""}
        placeholder="R2M"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng2t")}
        value={input.rng2t}
        className={emptyFields.includes("rng2t") ? "error" : ""}
        placeholder="R2T"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3b")}
        value={input.rng3b}
        className={emptyFields.includes("rng3b") ? "error" : ""}
        placeholder="R3B"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3m")}
        value={input.rng3m}
        className={emptyFields.includes("rng3m") ? "error" : ""}
        placeholder="R3M"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3t")}
        value={input.rng3t}
        className={emptyFields.includes("rng3t") ? "error" : ""}
        placeholder="R3T"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4b")}
        value={input.rng4b}
        className={emptyFields.includes("rng4b") ? "error" : ""}
        placeholder="R4B"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4m")}
        value={input.rng4m}
        className={emptyFields.includes("rng4m") ? "error" : ""}
        placeholder="R4M"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4t")}
        value={input.rng4t}
        className={emptyFields.includes("rng4t") ? "error" : ""}
        placeholder="R4T"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng1coat")}
        value={input.rng1coat}
        className={emptyFields.includes("rng1coat") ? "error" : ""}
        placeholder="R1COAT"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng2coat")}
        value={input.rng2coat}
        className={emptyFields.includes("rng2coat") ? "error" : ""}
        placeholder="R2COAT"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3coat")}
        value={input.rng3coat}
        className={emptyFields.includes("rng3coat") ? "error" : ""}
        placeholder="R3COAT"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4coat")}
        value={input.rng4coat}
        className={emptyFields.includes("rng4coat") ? "error" : ""}
        placeholder="R4COAT"
      />
    </div>
  ));

  return (
    <form className="cu01Form" onSubmit={handleSubmit}>
      <div className="formHeader">
        <h2>3-300 CuP (05) Halar</h2>
      </div>
      <div>
        <label>How many anodes are being tested?</label>
        <select value={selectedNumber} onChange={handleDropdownChange}>
          {Array.from({ length: 16 }, (_, index) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="cuInputSize">
      <div className="cuInputRows">{inputRows}</div>
      </div>
      <button className="cuSubmit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Copper05Form;