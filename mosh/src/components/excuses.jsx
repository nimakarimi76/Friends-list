import React, { useState } from "react";
import Axios from "axios";

function Excuse() {
  const [category, setCategory] = useState([
    "Family",
    "Office",
    "Children",
    "Party",
    "College",
  ]);
  const [data, setData] = useState({
    id: "",
    category: "",
    excuse: "",
  });

  const fetchData = (clickedCategory) => {
    Axios.get(
      `https://excuser.herokuapp.com/v1/excuse/${clickedCategory.toLowerCase()}`
    ).then((response) => {
      setData((prevState) => ({
        ...prevState,
        ...response.data[0],
      }));
    });
  };

  return (
    <div className="container mt-4 ">
      {category.map((category) => (
        <button
          key={category}
          className="btn btn-secondary m-1"
          onClick={() => fetchData(category)}
        >
          {category}
        </button>
      ))}
      <h3 className="my-4">Category: {data?.category}</h3>
      <h3>Excuse: {data?.excuse}</h3>
    </div>
  );
}

export default Excuse;
