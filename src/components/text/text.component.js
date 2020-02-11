/* IMPORTS */

// React and Component
import React, {Component} from 'react';

// The Stylesheet
import './text.component.scss';



// The Text class
class Text extends Component
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
export default Text;