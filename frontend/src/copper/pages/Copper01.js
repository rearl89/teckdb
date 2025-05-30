import { useEffect } from "react";
import { useCopper01Context } from "../hooks/useCopper01Context";
// import { Link } from "react-router-dom";

import Navbar from "../../homePage/Navbar";
import Copper01Details from "../components/Copper01Details";
import Copper01Form from "../components/Copper01Form";
import Copper01TestHeadings from "../components/Copper01TestHeadings";

const Copper01 = () => {
  const { copper01s, dispatch } = useCopper01Context();

  useEffect(() => {
    const fetchCopper01s = async () => {
      const response = await fetch(
        "https://teckdb-backend.onrender.com/copper01"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COPPER01S", payload: json });
      }
    };

    fetchCopper01s();
  }, [dispatch]);

  return (
    <div className="copper-background-fill">
      <Navbar />
      <Copper01Form />
      {/* <Link to="/copper01/list" target="_blank" className="listButton">List View</Link> */}
      <div className="overflow">
        <form>
          <Copper01TestHeadings />
          <div className="copper01s">
            {copper01s &&
              copper01s.map((copper01) => (
                <Copper01Details copper01={copper01} key={copper01._id} />
              ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Copper01;
