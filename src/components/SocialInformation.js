import React from "react";

const SocialInforamtion = () => {
  return (
    <div className="ui fluid  big button teal">
      <div className="ui grid row">
        <div className="ui four wide column">
          <a class="ui teal label large " href="http://mathsiva007@gmail.com">
            <i class="mail icon "></i>mathsiva007@gmail.com
          </a>
        </div>
        <div className="ui four wide column">
          <a class="ui teal label large ">
            <i class="mobile alternate icon "></i>+91 8667081845
          </a>
        </div>
        <div className="ui four wide column">
          <a
            class="ui teal label large "
            href="https://www.linkedin.com/in/mathan26"
          >
            <i class="linkedin icon "></i>linkedin.com/in/mathan26
          </a>
        </div>
        <div className="ui four wide column">
          <a class="ui teal label large " href="http://github.com/mathan26">
            <i class="github icon large"></i>github.com/mathan26
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialInforamtion;
