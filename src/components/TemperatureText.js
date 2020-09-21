import React from "react";

const TemperatureText = (props) => {

   return (
      <span className="bigText">{Math.floor((props.temperature - 32)* (5/9))}&deg;C</span>
   );
};

export default TemperatureText;