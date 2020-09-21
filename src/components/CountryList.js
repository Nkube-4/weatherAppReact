import React from "react";
import cList from "./cList";

const CountryList = (props) => {

const list = cList.map((city) => <option key={city.number} value={city.code}>{city.name}</option>);

// console.log(props);

   return (
      <select value={props.countryId} onChange={props.onCountryChange} className="ui search dropdown">
         <option value="">Select a country</option>
         {list}
      </select>
   );
};

export default CountryList;