import React from "react";

function Laptops(props) {
  console.log(props.data);
  return (
    <div className="topContainer">
      {props.data.map((item, index) => {
        return (
          <div className="innerContainer">
            <div>
              <h3>ID#: {item.id}</h3>
              <h4>{item.laptopName}</h4>
            </div>
            <img src={item.laptopUrl} alt={item.laptopName} />
            <ul>
              <li>${item.price}</li>
              <li>Screen Size: {item.screenSize} inches</li>
              <li>
                Screen Resolution: {item.resolutionWidth} x{" "}
                {item.resolutionHeight} pixels
              </li>
              <li>Processor Speed: {item.processorSpeed}GHz</li>
              <li>
                Storage: {item.storageAmount}
                {item.storageUnit}
              </li>
              <li>
                Memory: {item.memoryAmount}GB {item.memoryType}
              </li>
              <li>Battery Life: {item.battery} hours</li>
              <li>
                Weight: {item.weightAmount} {item.weightUnit}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Laptops;
