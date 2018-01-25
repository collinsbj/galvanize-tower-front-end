import React from "react";

function ListAllLaptopsButton(props) {
  return (
    <button
      className="listAllButton"
      onClick={props.listAllLaptopsSubmitHandler}
    >
      List All Laptops
    </button>
  );
}

export default ListAllLaptopsButton;
