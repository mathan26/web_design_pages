import React from "react";
import Header from "./Header";
import SocialInforamtion from "./SocialInformation";
import ColumnDivider from "./Divider";
const App = () => {
  return (
    <div className="ui container raised segment">
      <Header />
      <div class="ui section divider"></div>
      <SocialInforamtion />
      <ColumnDivider />
    </div>
  );
};

export default App;
