import React from 'react'
import "./WeatherApp.css"
import search_icon from "../../assets/search.png";
import drizzle_icon from '../../assets/drizzle.png';
import clear_icon from '../../assets/clear.png';
import cloud_icon from '../../assets/cloud.png';
import humidity_icon from '../../assets/humidity.png';
import rain_icon from '../../assets/rain.png';
import wind_icon from '../../assets/wind.png';
import snow_icon from '../../assets/snow.png';
import { useState } from 'react';


const WeatherApp = () => {
  const apiKey = '974443d5df4542892968ebeb9b4e78ee';
  const [icon, setIcon] = useState(cloud_icon);
	// const apiUrl =
	// 	'https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}';
	const search = async () => {
		const element = document.getElementsByClassName('city_input');
		if (element[0].value === '') {
			return 0;
		}
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
    
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    const humidity = document.getElementsByClassName('humidity_percent');
    const wind = document.getElementsByClassName('wind_speed')
    const temp = document.getElementsByClassName('weather_temp');
    const loc = document.getElementsByClassName('weather_loc');
    
    humidity[0].innerHTML = data.main.humidity +"%" ;
    wind[0].innerHTML = data.wind.speed + "km/h";
    temp[0].innerHTML = data.main.temp + '°C';
    loc[0].innerHTML = data.name;

    if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
			setIcon(clear_icon);
		} else if (
			data.weather[0].icon === '02d' ||
			data.weather[0].icon === '02n'
		) {
			setIcon(cloud_icon);
		} else if (
			data.weather[0].icon === '03d' ||
			data.weather[0].icon === '03n'
		) {
			setIcon(drizzle_icon);
		} else if (
			data.weather[0].icon === '04d' ||
			data.weather[0].icon === '04n'
		) {
			setIcon(drizzle_icon);
		} else if (
			data.weather[0].icon === '09d' ||
			data.weather[0].icon === '09n'
		) {
			setIcon(rain_icon);
		} else if (
			data.weather[0].icon === '10d' ||
			data.weather[0].icon === '10n'
		) {
			setIcon(rain_icon);
		} else if (
			data.weather[0].icon === '13d' ||
			data.weather[0].icon === '13n'
		) {
			setIcon(snow_icon);
    } else {
      setIcon(clear_icon)
    }
	};
	return (
		<>
			<div className="container">
				<div className="top-bar">
					<input
						type="text"
						className="city_input"
						placeholder="Search"
					/>
					<div
						className="search_icon"
						onClick={() => search()}
					>
						<img
							src={search_icon}
							alt="searchIcon"
						/>
					</div>
				</div>

				<div className="weather_img">
					<img
						src={cloud_icon}
						alt="cloud_icon"
					/>
				</div>

				<div className="weather_temp">24°C</div>
				<div className="weather_loc">New York</div>
				<div className="data_container">
					<div className="element">
						<img
							src={humidity_icon}
							alt=""
							className="icon"
						/>
						<div className="data">
							<div className="humidity_percent">64%</div>
							<div className="text">Humidity</div>
						</div>
					</div>
					<div className="element">
						<img
							src={wind_icon}
							alt=""
							className="icon"
						/>
						<div className="data">
							<div className="wind_speed">18 km/h</div>
							<div className="text">Wind</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WeatherApp