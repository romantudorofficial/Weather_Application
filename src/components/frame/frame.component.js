/* IMPORTS */

// React and Component
import React, {Component} from 'react';

// The Components
import Information from '../information/information.component';
import Image from '../image/image.component';
import Temperature from '../temperature/temperature.component';
import Text from '../text/text.component';

// The Stylesheet
import './frame.component.scss';



// The Frame class
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
                <Text value = "Hong Kong" />
                <Information value = "Monday, 01:20 AM" />
                <Image value = "../../images/crescent_moon_icon.png" />
                <Information value = "Clear" />
                <Temperature value = {all_data} />
                <Temperature value = "28 degrees" />
                <Temperature value = "17 degrees" />
                <Text value = "Wind Speed" />
                <Image value = "/images/Wind Icon.png" />
                <Information value = "32.4 m/s" />
            </div>
        );
    }
}



// Export the Class
export default Frame;