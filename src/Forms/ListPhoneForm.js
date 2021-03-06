import React from "react";

function ListPhoneForm(props) {
  return (
    <form id="listPhone" onSubmit={props.phoneListSubmitHandler}>
      <h4>Show Single Phone</h4>
      <label>ID#:</label>
      <input placeholder="eg. 3" id="phoneListId" name="phoneId" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ListPhoneForm;
