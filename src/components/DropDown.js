import React from "react";
import CountryList from "./CountryList";

const DropDown = (props) => {

   // console.log(props);
   
   return (
      <div className="field">
         <CountryList countryId={props.countryId} onCountryChange={props.onCountryChange} />
      </div>
			);
};

export default DropDown;