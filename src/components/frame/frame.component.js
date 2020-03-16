// Import React and Component
import React, {Component} from 'react';

// Import the Components
import Information from '../information/information.component';
import Image from '../image/image.component';
import Temperature from '../temperature/temperature.component';
import Text from '../text/text.component';

// Import the Stylesheet
import './frame.component.scss';

// Import the FontAwesome Icons
import {faMoon, faWind} from '@fortawesome/free-solid-svg-icons';



class Frame extends Component
{
    constructor (props)
    {
        super (props);
        this.state =
        {
            data: null,
            checkData: false
        };
        this.getData.bind (this.getData);
    }
    
    getData = () =>
    {
        fetch ('http://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=b877cc138ceeb7015615b7b122be7958&units=metric')
        .then (response => response.json())
        .then (data => this.setState({data: data, checkData: true}));
    }

    componentDidMount ()
    {
        this.getData ();
    }

    render ()
    {
        let all_data;
        
        if (this.state.isLoaded)
        {
            all_data = this.state.data.main.temp;
        }

        return (
            <div className = "frame">
                <Text value = "Hong Kong" className = "text city" />
                <Information value = "Monday, 01:20 AM" className = "information date" />
                <Image icon = {faMoon} className = "image sky_image" />
                <Information value = "Clear" className = "information sky" />
                <Temperature value = "20&deg;" className = "temperature temperature_big" />
                <Temperature value = "28&deg;" className = "temperature temperature_small_1" />
                <Temperature value = "17&deg;" className = "temperature temperature_small_2" />
                <Text value = "Wind Speed" className = "text wind_speed_text" />
                <Image icon = {faWind} className = "image wind_image" />
                <Information value = "32.4 m/s" className = "information wind_speed" />
            </div>
        );
    }
}



export default Frame;