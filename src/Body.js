import { useState } from "react";
import { FaBurger } from "react-icons/fa6";
import Meal from "./Meal";
import axios from "axios";

const Body = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    setData(response.data.meals);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="body my-5">
      <h3>Feeling Hungry?</h3>
      <h4>Get a random meal by clicking below</h4>
      <button
        className="btn btn-secondary"
        onClick={handleClick}
        style={{ marginBottom: "30px" }}
      >
        GET MEAL &nbsp; <FaBurger />
      </button>

      {data.length > 0 && <Meal data={data} />}
    </div>
  );
};

export default Body;
