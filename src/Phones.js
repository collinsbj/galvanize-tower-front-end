import React from "react";

function Phones(props) {
  console.log(props.data);
  return (
    <div className="topContainer">
      {props.data.map((item, index) => {
        var processor;
        if (item.processorSpeed === 0) {
          processor = "Unknown";
        } else {
          processor = item.processorSpeed + "GHz";
        }
        return (
          <div className="innerContainer" key={index}>
            <div>
              <h3>ID#: {item.id}</h3>
              <h4>{item.phoneName}</h4>
            </div>
            <img src={item.phoneUrl} alt={item.phoneName} />
            <ul>
              <li>${item.price}</li>
              <li>Screen Size: {item.screenSize} inches</li>
              <li>
                Screen Resolution: {item.resolutionWidth} x{" "}
                {item.resolutionHeight} pixels
              </li>
              <li>Processor Speed: {processor}</li>
              <li>Storage: {item.storageAmount}GB</li>
              <li>Battery Life: {item.battery} hours</li>
              <li>Weight: {item.weightAmount}oz</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Phones;
