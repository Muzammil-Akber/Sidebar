import React from "react";

const Header = ({ name }) => {
  return (
    <div>
      <h1 className="font-semibold text-lg lg:text-2xl font-popins whitespace-pre">
        {name}
      </h1>
    </div>
  );
};

export default Header;
