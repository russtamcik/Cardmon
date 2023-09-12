import React from "react";
import PropTypes from "prop-types";

const DebtCard = ({ name, phone, debt, id, editDebt, deleteDebt }) => {
  return (
    <div className="d-flex justify-content-between my-3 p-3 card-bg">
      <div className="debt-content d-flex align-items-center flex-grow-1 justify-content-between pe-3">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{debt}$</p>
      </div>
      <div className="debt-action">
        <button onClick={() => editDebt(id)} className="btn btn-primary me-3">
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => deleteDebt(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

DebtCard.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  debt: PropTypes.number,
  id: PropTypes.string,
};

export default DebtCard;
