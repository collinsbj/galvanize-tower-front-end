import React from "react";

function PhoneForm2(props) {
  return (
    <form id="updatePhone" onSubmit={props.phoneUpdateSubmitHandler}>
      <h4>Update</h4>
      <label>ID#:</label>
      <input placeholder="eg. 3" id="phoneUpdateId" name="phoneId" />
      <label>Name:</label>
      <input placeholder="eg. Apple iPhone X" name="phoneName" />
      <label>Price (in Dollars):</label>
      <input placeholder="eg. 999" name="phonePrice" />
      <label>Screen Size (in inches):</label>
      <input placeholder="eg. 5.5" name="phoneScreenSize" />
      <label>Resolution Width (in pixels):</label>
      <input placeholder="eg. 1440" name="phoneResolutionWidth" />
      <label>Resolution Height (in pixels):</label>
      <input placeholder="eg. 1900" name="phoneResolutionHeight" />
      <label>Processor Speed (in GHz):</label>
      <input placeholder="eg. 3.2" name="phoneProcessorSpeed" />
      <label>Storage Amount (in GB):</label>
      <input placeholder="eg. 64" name="phoneStorageAmount" />
      <label>Battery Life (in hours):</label>
      <input placeholder="eg. 12" name="phoneBattery" />
      <label>Weight (in ounces):</label>
      <input placeholder="eg. 6.14" name="phoneWeight" />
      <label>Image URL:</label>
      <input placeholder="eg. google.com/image.jpg" name="phoneImgUrl" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PhoneForm2;
