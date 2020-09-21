import React from "react";

const DateText = (props) => {

   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   // const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

   return (
   <div>{`${days[props.date.getDay()]}, ${props.date.getDate()}`}</div>
   );
};

export default DateText;