import React from "react";

const MainContainer = (props) => {

   console.log(props);

   const getBackgroundStyle = (iconNumber) => {

      if(iconNumber >= 1 && iconNumber <= 5) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/sunny.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber >= 6 && iconNumber <= 11) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/cloudy.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber >= 12 && iconNumber <= 18) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/rainy.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber >= 19 && iconNumber <= 29) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/snowy.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber === 30) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/sunny.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber === 31) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/snowy.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber === 32) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/windy.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber >= 33 && iconNumber <= 36) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/clearNight.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber >= 37 && iconNumber <= 38) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/cloudyNight.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }

      if(iconNumber >= 38 && iconNumber <= 44) {
         return style = {  
            backgroundImage: `url("/weatherBackgrounds/rainy.jpg")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         };
      }
   };

   let style = {};

   if(props.currentWeather.length >= 1) {
      style = getBackgroundStyle(props.currentWeather[0].WeatherIcon);
   }

   return (
      <div style={style} className="ui segment vertical center aligned main">
         {props.children}
      </div>
   );
};

export default MainContainer;