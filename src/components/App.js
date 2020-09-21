import React from "react";
import Search from "./Search";
import weather from "../api/weather";
import DropDown from "./DropDown";
import CityList from "./CityList";
import ForecastList from "./ForecastList";
import CurrentForecast from "./CurrentForecast";
import MainContainer from "./MainContainer";
import Spinner from "./Spinner";
import Error from "./Error";

// function throttle(func, duration) {
// 	let shouldWait = false;
// 	return function (...args) {
// 		if (!shouldWait) {
// 			func.apply(this, args);
// 			shouldWait = true;
// 			setTimeout(function () {
// 				shouldWait = false;
// 			}, duration);
// 		}
// 	};
// }

function debounce(func, duration) {
	let timeout;
	return function (...args) {
      console.log(args, this, timeout);
		const effect = () => {
			timeout = null;
			return func.apply(this, args);
		};
		clearTimeout(timeout);
		timeout = setTimeout(effect, duration);
	};
}

// let debounceSith = (fn, delay) => {
//    let timeoutId;

//    return function(...args) {
//       if(timeoutId) {
//          clearTimeout(timeoutId);
//       }

//       timeoutId = setTimeout(() => {
//          fn(...args);
//       }, delay);
//    };
// };

class App extends React.Component {

   state = {term: "", countryId: "", cityKey: "", cities:[], currentConditions:[], forecast: [], spinner: false, error: false};

   componentDidMount() {
      this.setState({spinner:true});
      window.navigator.geolocation.getCurrentPosition(async (pos) => {
         // console.log(pos.coords.latitude);
         // console.log(pos.coords.longitude);

         const {data} = await weather.get("/locations/v1/cities/geoposition/search", {
            params: {
               apikey: process.env.REACT_APP_WEATHER_KEY,
               q: `${pos.coords.latitude},${pos.coords.longitude}`
            }
         });

         console.log(data, "search city by lat/lon");

         const currentConditions = await weather.get(`/currentconditions/v1/${data.Key}`, {
            params: {
               apikey: process.env.REACT_APP_WEATHER_KEY,
            }
         });

         console.log(currentConditions, "current conditions");
         
         const forecast = await weather.get(`/forecasts/v1/daily/5day/${data.Key}`, {
            params: {
               apikey: process.env.REACT_APP_WEATHER_KEY,
            }
         });

         console.log(forecast, "forecast");


         this.setState({cityKey:data.Key, term:data.LocalizedName, countryId:data.Country.ID, forecast:forecast.data.DailyForecasts, currentConditions:currentConditions.data, spinner:false});

         
      }, err => console.log(err));
      
   }

   onTermChange = (event) => {
      
      this.searchCity(event.target.value);
      this.setState({term: event.target.value, spinner:true, cities:[], forecast:[], currentConditions:[], error:false});
      console.log("search");

   };

   searchCity = debounce(async (term) => {

      if(this.state.countryId) {
         console.log("with country id");

         const dataWithId = await weather.get(`/locations/v1/cities/${this.state.countryId}/search`, {
            params: {
               apikey: process.env.REACT_APP_WEATHER_KEY,
               q: term
            }
         });

         console.log(dataWithId, "search city with id");
         if(dataWithId.data.length >= 1) {
            this.setState({cities:dataWithId.data, spinner:false, error:false});
         } else {
            this.setState({spinner:false, error:true});
         }
         return;
      }
      
      const dataNoId = await weather.get("/locations/v1/cities/search", {
         params: {
            apikey: process.env.REACT_APP_WEATHER_KEY,
            q: term
         }
      });

      console.log(dataNoId, "search city no id");
      if(dataNoId.data.length >= 1) {
            this.setState({cities:dataNoId.data, spinner:false, error:false});
         } else {
            this.setState({spinner:false, error:true});
         }
      

      // this.setState({});
   }, 1000);

   searchForecast = async (cityKey) => {

      const currentConditions = await weather.get(`/currentconditions/v1/${cityKey}`, {
            params: {
               apikey: process.env.REACT_APP_WEATHER_KEY,
            }
      });

      const forecast = await weather.get(`/forecasts/v1/daily/5day/${cityKey}`, {
            params: {
               apikey: process.env.REACT_APP_WEATHER_KEY,
            }
      });

      console.log(forecast, "forecast");
      this.setState({forecast:forecast.data.DailyForecasts, currentConditions:currentConditions.data, spinner:false, error:false});
      
   }

   onCountryChange = (event) => {
      console.log(event.target.value);
      console.log("city changed");
      this.setState({countryId:event.target.value});
   };

   onCityKeyChange = (cityKey) => {
      console.log("city key changed");
      this.searchForecast(cityKey);
      this.setState({cityKey, cities:[], spinner:true, error:false});
   };



   render() {
      console.log(this.state, "render");

      const citiesList = (this.state.cities.length >= 1) ? <CityList onCityKeyChange={this.onCityKeyChange} cities={this.state.cities} /> : null;

      const currentConditions = (this.state.currentConditions.length >= 1) ? <CurrentForecast currentConditions={this.state.currentConditions} /> : null;

      const forecastList = (this.state.forecast.length >= 1) ? <ForecastList forecast={this.state.forecast} /> : null;

      const spinner = (this.state.spinner) ? <Spinner /> : null;

      const error = (this.state.error) ? <Error /> : null;

      return (
         

         <MainContainer currentWeather={this.state.currentConditions}>
            <div className="ui container search">
               <div className="ui form">
                  <div className="two fields">
                     <Search term={this.state.term} onTermChange={this.onTermChange}  />
                     <DropDown countryId={this.state.countryId} onCountryChange={this.onCountryChange} />
                  </div>
               </div>
            </div>
            {currentConditions}
            <div className="ui container listDisplay">
               {citiesList}
               {forecastList}
               {spinner}
               {error}
            </div>
         </MainContainer>
         
      );
   }
};

export default App;