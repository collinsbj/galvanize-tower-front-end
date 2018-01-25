import React from "react";

function ListAllPhonesButton(props) {
  return (
    <button
      className="listAllButton"
      onClick={props.listAllPhonesSubmitHandler}
    >
      List All Phones
    </button>
  );
}

export default ListAllPhonesButton;
