import React from "react";


const CityCard = (props) => {
   return (
      <a href="#search" onClick={() => props.onCityKeyChange(props.cityKey)} className={`card cityCard`}>
         <div className="content">
            <div className="header">{`${props.cityName}, ${props.stateName}, ${props.countryName}`}</div>
         </div>
      </a>
   );
};

export default CityCard;