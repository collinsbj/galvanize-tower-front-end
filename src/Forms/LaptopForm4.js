import React from "react";

function LaptopForm4(props) {
  return (
    <form id="deleteLaptop" onSubmit={props.laptopDeleteSubmitHandler}>
      <h4>Delete Laptop</h4>
      <label>ID#:</label>
      <input placeholder="eg. 3" id="laptopDeleteId" name="laptopId" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LaptopForm4;
