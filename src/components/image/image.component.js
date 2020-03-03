/* IMPORTS */

// React and Component
import React, {Component} from 'react';

// The Stylesheet
import './image.component.scss';



// The Iamge class
class Image extends Component
{
    render ()
    {
        return (
            <img src = {this.props.value} />
        );
    }
}



// Export the Class
export default Image;