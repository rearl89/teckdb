import { useState } from "react";
import { useCopper01Context } from "../hooks/useCopper01Context";

const Copper01Form = () => {
  const { dispatch } = useCopper01Context();

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
    rng1od1: "",
    rng1od2: "",
    rng2od1: "",
    rng2od2: "",
    rng3od1: "",
    rng3od2: "",
    rng3od3: "",
    rng3od4: "",
    rng4od1: "",
    rng4od2: "",
    rng4od3: "",
    rng4od4: "",
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
      const copper01 = inputData[i];

      const response = await fetch("/copper01", {
        method: "POST",
        body: JSON.stringify(copper01),
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
        dispatch({ type: "CREATE_COPPER01", payload: json });
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
        onChange={(e) => handleInputChange(e, index, "rng1od1")}
        value={input.rng1od1}
        className={emptyFields.includes("rng1od1") ? "error" : ""}
        placeholder="R1OD1"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng1od2")}
        value={input.rng1od2}
        className={emptyFields.includes("rng1od2") ? "error" : ""}
        placeholder="R1OD2"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng2od1")}
        value={input.rng2od1}
        className={emptyFields.includes("rng2od1") ? "error" : ""}
        placeholder="R2OD1"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng2od2")}
        value={input.rng2od2}
        className={emptyFields.includes("rng2od2") ? "error" : ""}
        placeholder="R2OD2"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3od1")}
        value={input.rng3od1}
        className={emptyFields.includes("rng3od1") ? "error" : ""}
        placeholder="R3OD1"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3od2")}
        value={input.rng3od2}
        className={emptyFields.includes("rng3od2") ? "error" : ""}
        placeholder="R3OD2"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3od3")}
        value={input.rng3od3}
        className={emptyFields.includes("rng3od3") ? "error" : ""}
        placeholder="R3OD3"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng3od4")}
        value={input.rng3od4}
        className={emptyFields.includes("rng3od4") ? "error" : ""}
        placeholder="R3OD4"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4od1")}
        value={input.rng4od1}
        className={emptyFields.includes("rng4od1") ? "error" : ""}
        placeholder="R4OD1"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4od2")}
        value={input.rng4od2}
        className={emptyFields.includes("rng4od2") ? "error" : ""}
        placeholder="R4OD2"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4od3")}
        value={input.rng4od3}
        className={emptyFields.includes("rng4od3") ? "error" : ""}
        placeholder="R4OD3"
      />
      <input
        type="number"
        onChange={(e) => handleInputChange(e, index, "rng4od4")}
        value={input.rng4od4}
        className={emptyFields.includes("rng4od4") ? "error" : ""}
        placeholder="R4OD4"
      />
    </div>
  ));

  return (
    <form className="cu01Form" onSubmit={handleSubmit}>
      <div className="formHeader">
        <h2>3-300 CuP (01)</h2>
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
      <div className="cuInputRows">{inputRows}</div>
      <button className="cuSubmit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Copper01Form;