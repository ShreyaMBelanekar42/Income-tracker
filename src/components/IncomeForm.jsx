import React from "react";
import { useRef } from "react";

const IncomeForm = ({ income, setIncome }) => {
  const desc = useRef(null);
  const price = useRef(null);
  const date = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();

    let d = date.current.value.split("-");
    let newDate = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newDate.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <div className="form">
      <form>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Enter description"
          autoComplete="off"
          ref={desc}
        />
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Enter price"
          ref={price}
        />
        <input type="date" name="date" id="date" ref={date} />
        <input type="submit" value="Add Income" id="button" onClick={AddIncome} />
      </form>
    </div>
  );
};

export default IncomeForm;
