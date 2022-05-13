import React, { useEffect, useState } from "react";
import Bike from "../Bike/Bike";

const Bikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setBikes(data));
  }, []);
  return (
    <div className="text-center">
      <h2 className="p-3 inline-block  text-4xl font-semibold	mb-3 text-gray-100">
        Bikes
      </h2>
      <div className="grid md:grid-cols-3 gap-4 text-left">
        {bikes.slice(0, 6).map(bike => (
          <Bike key={bike._id} bike={bike}></Bike>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
