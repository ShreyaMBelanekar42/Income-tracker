import React from "react";

const IncomeItem = ({ income, index }) => {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return (
    <div>
      <div className="income-item">
        <h3 className="income-desc">{income.desc}</h3>
        <h3 className="income-price">Rs. {income.price}</h3>
        <h3 className="income-date">{day + "/" + month + "/" + year}</h3>
      </div>
    </div>
  );
};

export default IncomeItem;
