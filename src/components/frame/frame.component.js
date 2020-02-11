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
    render ()
    {
        return (
            <div>
                <Text value = "Hong Kong" />
                <Information value = "Monday, 01:20 AM" />
                <Image value = "../../images/Crescent Moon Icon.png" />
                <Information value = "Clear" />
                <Temperature value = "23 degrees" />
                <Temperature value = "28 degrees" />
                <Temperature value = "17 degrees" />
                <Text value = "Wind Speed" />
                <Image value = "../../images/Wind Icon.png" />
                <Information value = "32.4 m/s" />
            </div>
        );
    }
}



// Export the Class
export default Frame;