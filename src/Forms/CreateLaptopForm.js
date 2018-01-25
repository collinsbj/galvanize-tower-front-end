import React from "react";

function CreateLaptopForm(props) {
  return (
    <form id="createLaptop" onSubmit={props.laptopCreateSubmitHandler}>
      <h4>Create</h4>
      <label>Name:</label>
      <input placeholder="eg. Apple MacBook Pro" name="laptopName" />
      <label>Price (in dollars):</label>
      <input placeholder="eg. 1679" name="laptopPrice" />
      <label>Screen Size (in inches):</label>
      <input placeholder="eg. 15.4" name="laptopScreenSize" />
      <label>Resolution Width (in pixels):</label>
      <input placeholder="eg. 1400" name="laptopResolutionWidth" />
      <label>Resolution Height (in pixels):</label>
      <input placeholder="eg. 2700" name="laptopResolutionHeight" />
      <label>Processor Speed (in GHz):</label>
      <input placeholder="eg. 2.7" name="laptopProcessorSpeed" />
      <label>Storage Amount:</label>
      <input placeholder="eg. 500" name="laptopStorageAmount" />
      <label>Storage Unit:</label>
      <input placeholder="eg. GB" name="laptopStorageUnit" />
      <label>Memory Amount (in GB):</label>
      <input placeholder="eg. 32" name="laptopMemoryAmount" />
      <label>Memory Type:</label>
      <input placeholder="eg. LPDDR3" name="laptopMemoryType" />
      <label>Battery Life (in hours):</label>
      <input placeholder="eg. 10" name="laptopBattery" />
      <label>Weight:</label>
      <input placeholder="eg. 6.6" name="laptopWeight" />
      <label>Weight Unit:</label>
      <input placeholder="eg. pounds" name="laptopWeightUnit" />
      <label>Image URL:</label>
      <input placeholder="eg. google.com/image.jpg" name="laptopImgUrl" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateLaptopForm;
