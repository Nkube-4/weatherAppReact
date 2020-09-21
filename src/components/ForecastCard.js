import React from "react";
import DateText from "./DateText";
import TemperatureText from "./TemperatureText";

const ForecastCard = (props) => {

   return (
			<div className="card  forecastCard">
				<div className="content">
					<div className="header">
						<DateText date={props.date} />
					</div>
					<div className="ui divider"></div>
					<div className="image">
						<img
							src={`https://developer.accuweather.com/sites/default/files/${
								props.iconD < 10 ? "0" + props.iconD : props.iconD
							}-s.png`}
						/>
						<img
							src={`https://developer.accuweather.com/sites/default/files/${
								props.iconN < 10 ? "0" + props.iconN : props.iconN
							}-s.png`}
						/>
					</div>
					<div className="ui divider"></div>
					<div className="content">
						<div className="summary">
							<span className="ui header">
								<TemperatureText temperature={props.temperature.Maximum.Value} /> 
									--
								<TemperatureText temperature={props.temperature.Minimum.Value} />
							</span>
						</div>
					</div>
				</div>
			</div>
			);
};

export default ForecastCard;