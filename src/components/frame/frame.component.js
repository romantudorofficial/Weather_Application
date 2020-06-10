// Import React and Component
import React, {Component} from 'react';

// Import the Components
import Information from '../information/information.component';
import Image from '../image/image.component';
import Temperature from '../temperature/temperature.component';
import Text from '../text/text.component';
import Button from '../button/button.component';

// Import the Stylesheet
import './frame.component.scss';

// Import the FontAwesome Icons
import {faWind, faCloudRain, faCloud, faSun, faSnowflake, faSmog, faGrinStars} from '@fortawesome/free-solid-svg-icons';



class Frame extends Component
{
    constructor (props)
    {
        super (props);
        this.state =
        {
            data: null,
            checkData: false,
            city: "Bucharest"
        };
        this.getData.bind (this.getData);
        this.changeCity.bind (this.changeCity);
    }
    
    getData = () =>
    {
        fetch ('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city + '&APPID=b877cc138ceeb7015615b7b122be7958&units=metric')
        .then (response => response.json())
        .then (data => this.setState({data: data, checkData: true}));
    }

    changeCity = (e) =>
    {
        this.setState ({city: e.currentTarget.textContent}, () => this.getData());
        // this.getData ();
    }

    componentDidMount = () =>
    {
        this.getData ();
    }

    getDate = () =>
    {
        let date, timezone, day, month, year, hours, minutes, seconds;
        date = new Date();
        timezone = this.state.data.timezone;
        date.setUTCSeconds(date.getUTCSeconds() + timezone);
        day = String (date.getUTCDate()).padStart(2, '0');
        month = String (date.getUTCMonth() + 1).padStart(2, '0');
        year = date.getUTCFullYear();
        hours = String (date.getUTCHours()).padStart(2, '0');
        minutes = String (date.getUTCMinutes()).padStart(2, '0');
        seconds = String (date.getUTCSeconds()).padStart(2, '0');
        date = day + '/' + month + '/' + year + ', ' + hours + ':' + minutes;
        return date;
    }

    render ()
    {
        let city_name, typeOfWeather, temperature, temperature_max, temperature_min, wind_speed, date, icon;
        let temperature_max_string, temperature_min_string, temperature_max_length, temperature_min_length;
        let small_temperatures_flag = false;

        if (this.state.checkData)
        {
            city_name = this.state.data.name;
            if (city_name === "Galati")
                city_name = "Galați";
            if (city_name === "Braila")
                city_name = "Brăila";
            typeOfWeather = this.state.data.weather[0].main;
            temperature = Math.floor(this.state.data.main.temp);
            temperature_max = Math.floor(this.state.data.main.temp_max);
            temperature_min = Math.floor(this.state.data.main.temp_min);
            wind_speed = this.state.data.wind.speed;
            date = this.getDate();
            temperature_max_string = temperature_max.toString();
            temperature_min_string = temperature_min.toString();
            temperature_max_length = temperature_max_string.length;
            temperature_min_length = temperature_min_string.length;
            if (temperature_max_length == 1 && temperature_min_length == 1)
                small_temperatures_flag = true;
        }

        switch (typeOfWeather)
        {
            case "Clear":
                icon = faSun;
                break;
            case "Clouds" || "Squall":
                icon = faCloud;
                break;
            case "Snow":
                icon = faSnowflake;
                break;
            case "Rain" || "Thunderstorm" || "Drizzle":
                icon = faCloudRain;
                break;
            case "Haze" || "Smoke" || "Mist" || "Dust" || "Fog" || "Sand" || "Ash" || "Tornado":
                icon = faSmog;
                break;
            default:
                icon = faGrinStars;
        }

        return (
            <div className = "frame">

                <div className = "cities">
                    <Button city = "Cluj-Napoca" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Vatra Dornei" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Bucharest" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Munich" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Vienna" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Moscow" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Los Angeles" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Galați" onButtonClick = {this.changeCity} className = "button" />
                    <Button city = "Brăila" onButtonClick = {this.changeCity} className = "button" />
                </div>

                <Text value = {city_name} className = "text city" />

                <Information value = {date} className = "information date" />

                <Image icon = {icon} className = "image sky_image" />

                <Information value = {typeOfWeather} className = "information sky" />

                <div className = "temperatures">
                    <Temperature value = {temperature + "°"} className = "temperature temperature_big" />
                    <div className = "small_temperatures">
                        <div className = "small_temperatures_group">
                            <Temperature value = {temperature_max} className = "temperature temperature_small" />
                            <Text value = "°C" className = "text degree_celsius" />
                        </div>
                        <hr className = "temperatures_line" />
                        <div className = "small_temperatures_group">
                            <Temperature value = {temperature_min} className = "temperature temperature_small" />
                            <Text value = "°C" className = "text degree_celsius" />
                        </div>
                    </div>
                </div>

                <Text value = "Wind Speed" className = "text wind_speed_text" />

                <div className = "wind_speed_container">
                    <Image icon = {faWind} className = "image wind_image" />
                    <Information value = {wind_speed} className = "information wind_speed" />
                </div>

            </div>
        );
    }
}



export default Frame;