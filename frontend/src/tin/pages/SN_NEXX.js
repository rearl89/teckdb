import { useEffect } from "react";
import { useSnNexxContext } from "../hooks/useSnNexxContext";

import Navbar from "../../homePage/Navbar";
import SnNexxDetails from "../components/SnNexxDetails";
import SnNexxForm from "../components/SnNexxForm";

const SN_NEXX = () => {
  const { sn_nexxs, dispatch } = useSnNexxContext();

  useEffect(() => {
    const fetchSnNexxs = async () => {
      const response = await fetch(
        "https://teckdb-backend.onrender.com/sn_nexx"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_SN_NEXXS", payload: json });
      }
    };

    fetchSnNexxs();
  }, [dispatch]);
  return (
    <div className="tin-background-fill">
      <Navbar />
      <SnNexxForm />
      <div className="cuChemXColumns">
        <h5>Batch ID</h5>
        <h5>Anode #</h5>
        <h5>Date</h5>
        <h5>Weight</h5>
        <h5>Thickness</h5>
        <h5>Pass Visual?</h5>
        <h5>Comment</h5>
      </div>
      <div className="cuChemXs">
        {sn_nexxs &&
          sn_nexxs.map((sn_nexx) => (
            <SnNexxDetails sn_nexx={sn_nexx} key={sn_nexx._id} />
          ))}
      </div>
    </div>
  );
};

export default SN_NEXX;
