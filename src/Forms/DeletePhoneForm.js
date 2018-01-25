import React from "react";

function DeletePhoneForm(props) {
  return (
    <form id="deletePhone" onSubmit={props.phoneDeleteSubmitHandler}>
      <h4>Delete Phone</h4>
      <label>ID#:</label>
      <input placeholder="eg. 3" id="phoneDeleteId" name="phoneId" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default DeletePhoneForm;
