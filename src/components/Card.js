import React from "react";
import avatar from "../images/patrick.png";

const card = () => {
  return (
    <div className="ui card image">
      <img src={avatar} alt="IMAGE" />
    </div>
  );
};

export default card;
