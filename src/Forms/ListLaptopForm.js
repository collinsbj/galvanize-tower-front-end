import React from "react";

function ListLaptopForm(props) {
  return (
    <form id="listLaptop" onSubmit={props.laptopListSubmitHandler}>
      <h4>Show Single Laptop</h4>
      <label>ID#:</label>
      <input placeholder="eg. 3" id="laptopListId" name="laptopId" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ListLaptopForm;
