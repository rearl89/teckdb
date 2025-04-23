import { useEffect } from "react";
import { useCopper09Context } from "../hooks/useCopper09Context";

import Navbar from "../../homePage/Navbar";
import Copper09Details from "../components/Copper09Details";
import Copper09Form from "../components/Copper09Form";
import Copper09DHTestHeadings from "../components/Copper09DHTestHeadings";

const Copper09 = () => {
  const { copper09s, dispatch } = useCopper09Context();

  useEffect(() => {
    const fetchCopper09s = async () => {
      const response = await fetch(
        "https://teckdb-backend.onrender.com/copper09"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_COPPER09S", payload: json });
      }
    };

    fetchCopper09s();
  }, [dispatch]);

  return (
    <div className="copper-background-fill">
      <Navbar />
      <Copper09Form />
      {/* <Link to="/copper09/list" target="_blank" className="listButton">List View</Link> */}
      <div className="overflow">
        <form>
          <Copper09DHTestHeadings />
          <div className="copper09s">
            {copper09s &&
              copper09s.map((copper09) => (
                <Copper09Details copper09={copper09} key={copper09._id} />
              ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Copper09;
