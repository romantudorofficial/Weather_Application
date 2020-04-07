// Import "React" and "Component"
import React, {Component} from 'react';

// Import the Stylesheet
import './image.component.scss';

// Import FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';



class Image extends Component
{
    render ()
    {
        return (
            <FontAwesomeIcon icon = {this.props.icon} className = {this.props.className} />
        );
    }
}



export default Image;