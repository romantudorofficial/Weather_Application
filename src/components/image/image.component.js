/* IMPORTS */

// React and Component
import React, {Component} from 'react';

// The Stylesheet
import './image.component.scss';

// Import FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



// The Iamge class
class Image extends Component
{
    render ()
    {
        return (
            <FontAwesomeIcon icon = {this.props.icon} className = {this.props.className} />
        );
    }
}



// Export the Class
export default Image;