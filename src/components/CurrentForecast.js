import React from "react";
import DateText from "./DateText";

const CurrentForecast = (props) => {

   console.log(props);

   let now = new Date(Date.now());

   return (
				<div className="ui container currentForecast">
					<div className="ui grid container">
						<div className="ui card row">
							<div className="eight wide column">
								<span className="meta right floated time">
                           <DateText date={now} />
                        </span>
								<div className="ui header">
									Current Conditions
								</div>
								<img
									className="ui image medium centered"
									src={`https://developer.accuweather.com/sites/default/files/${
										props.currentConditions[0].WeatherIcon < 10
											? "0" + props.currentConditions[0].WeatherIcon
											: props.currentConditions[0].WeatherIcon
									}-s.png`}
								/>
							</div>
							<div className="middle aligned eight wide column">
								<div className="content">
									<div className="ui header">Temperature</div>
									<div className="description bigText">
										{`${props.currentConditions[0].Temperature.Metric.Value}`}&deg;C
									</div>
								</div>
								<div className="ui divider"></div>
								<div className="content">
									<div className="ui header">Description</div>
									<div className="description bigText">
										{props.currentConditions[0].WeatherText}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
};

export default CurrentForecast;