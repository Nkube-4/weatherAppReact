import React from "react";
import ForecastCard from "./ForecastCard";

const ForecastList = (props) => {
   console.log(props);

   props.forecast.shift();

   const forecastCards = props.forecast.map((day) => {
      let date = new Date(day.Date);
      return <ForecastCard date={date} key={day.EpochDate} iconD={day.Day.Icon} iconN={day.Night.Icon} temperature={day.Temperature} />;
   });

   return(
      <div className="ui container centered grid">
         <div className="ui cards row">
            {forecastCards}
         </div>
      </div>
   );
};

export default ForecastList;