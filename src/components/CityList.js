import React from "react";
import CityCard from "./CityCard";

const CityList = (props) => {

   const citiesList =  props.cities.map(city => {
      return (
         <CityCard onCityKeyChange={props.onCityKeyChange} key={city.Key} cityKey={city.Key} cityName={city.LocalizedName} stateName={city.AdministrativeArea.LocalizedName} countryName={city.Country.LocalizedName} length={props.cities.length} />
      );
   });

   return (
            <div className="ui grid">
               <div className="ui centered cards row">
                  {citiesList}
               </div>
            </div>
         );
};

export default CityList;