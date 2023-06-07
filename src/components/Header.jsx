import React from "react";

const Header = ({ totalIncome }) => {
  return (
    <header>
      <h1 className="title">Income Tracker</h1>
      <div>
        <p className="header-tag">Rs. {totalIncome}</p>
      </div>
    </header>
  );
};

export default Header;
