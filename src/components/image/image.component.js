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
            <div>
                {
                    this.props.value
                }
            </div>
        );
    }
}



// Export the Class
export default Image;