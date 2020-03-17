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
import {faWind, faCloudRain, faCloud, faSun, faSnowflake, faGrinStars} from '@fortawesome/free-solid-svg-icons';



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
        this.setState ({city: e.currentTarget.textContent});
        // console.log (this.state.city);
        this.getData ();
    }

    componentDidMount ()
    {
        this.getData ();
    }

    render ()
    {
        let city_name, date, typeOfWeather, temperature, temperature_max, temperature_min, wind_speed;
        let icon;
        
        if (this.state.checkData)
        {
            city_name = this.state.data.name;
            // date = 
            typeOfWeather = this.state.data.weather[0].main;
            temperature = Math.floor(this.state.data.main.temp);
            temperature_max = this.state.data.main.temp_max;
            temperature_min = this.state.data.main.temp_min;
            wind_speed = this.state.data.wind.speed;
            // console.log(this.state.data.main.temp);
            
            switch (typeOfWeather)
            {
                case "Clear":
                    icon = faSun;
                    break;
                case "Clouds":
                    icon = faCloud;
                    break;
                case "Snow":
                    icon = faSnowflake;
                    break;
                case "Rain":
                    icon = faCloudRain;
                    break;
                default:
                    icon = faGrinStars;
            }
        }

        //console.log(this.state.data);

        return (
            <div className = "frame">
                <div className = "cities">
                    <Button city = "Cluj-Napoca" onButtonClick = {this.changeCity} />
                    <Button city = "Vatra Dornei" onButtonClick = {this.changeCity} />
                    <Button city = "Brodina" onButtonClick = {this.changeCity} />
                    <Button city = "Munich" onButtonClick = {this.changeCity} />
                    <Button city = "Bucharest" onButtonClick = {this.changeCity} />
                    <Button city = "Vienna" onButtonClick = {this.changeCity} />
                    <Button city = "Los Angeles" onButtonClick = {this.changeCity} />
                    <Button city = "London" onButtonClick = {this.changeCity} />
                    <Button city = "Moscow" onButtonClick = {this.changeCity} />
                </div>
                <Text value = {city_name} className = "text city" />
                <Information value = "Monday, 01:20 AM" className = "information date" />
                <Image icon = {icon} className = "image sky_image" />
                <Information value = {typeOfWeather} className = "information sky" />
                <div className = "temperatures">
                    <Temperature value = {temperature} className = "temperature temperature_big" />
                    <div className = "small_temperatures">
                        <Temperature value = {temperature_max} className = "temperature temperature_small_1" />
                        <hr />
                        <Temperature value = {temperature_min} className = "temperature temperature_small_2" />
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