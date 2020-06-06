import React from "react";
import Card from "./Card";
import "../css/style.css";
const Header = () => {
  return (
    <div className="ui grid row">
      <div className="two wide column">
        <Card />
      </div>
      <div className="thirteen wide column">
        <h2 className="ui header">
          <div className="red text">
            Mathankumar S
            <div className="sub header ">
              <span>
                <h3 className="blue text" href="">
                  Java Developer
                </h3>
              </span>
              <span>
                <div className="content description purple text">
                  A result oriented and self-motivated software developer,
                  giving my maximum efforts and creative ideas to full fill the
                  requirement.To work in demanding environment where I can
                  contribute to the company growth, based on the knowledge and
                  skills I have developed through my education and experience.
                </div>
              </span>
            </div>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Header;
