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
                <Text />
                <Information />
                <Image />
                <Information />
                <Temperature />
                <Temperature />
                <Temperature />
                <Text />
                <Image />
                <Information />
            </div>
        );
    }
}



// Export the Class
export default Frame;