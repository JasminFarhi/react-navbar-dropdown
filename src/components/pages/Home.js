import React from "react";
import "../../App.css";
import { robFarhi } from "../../images/augMeetUp.png";

const Home = () => {
  console.log(robFarhi);
  return (
    <>
      <div>
        <img src={require(robFarhi)} alt="rob" />
      </div>
    </>
  );
};
export default Home;
