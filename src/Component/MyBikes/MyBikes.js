import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import MyBike from "../MyBike/MyBike";

const MyBikes = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    <Loading />;
  }
  if (error) {
    console.dir(error);
  }
  const [bikes, setBikes] = useState([]);
  console.log(user?.email);
  const email = user?.email;
  
  const url = `http://localhost:5000/myProducts?email=${email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setBikes(data);
  //       console.log(url);
  //     });
  // }, [url]);
  useEffect(() => {
    const getMyBikes = async () => {
      const { datas } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setBikes(datas);
      console.log(url);
    };
    getMyBikes();
  }, [url]);
  return (
    <div>
      <h2 className="p-3 inline-block  text-4xl font-semibold	mb-3 text-gray-100">
        My Bikes
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {bikes.map(bike => (
          <MyBike key={bike.id} bike={bike}></MyBike>
        ))}
      </div>
    </div>
  );
};

export default MyBikes;
