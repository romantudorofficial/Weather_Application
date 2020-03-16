/* IMPORTS */

// React and Component
import React, {Component} from 'react';

// The Stylesheet
import './information.component.scss';



// The Information class
class Information extends Component
{
    render ()
    {
        return (
            <div className = {this.props.className}>
                {this.props.value}
            </div>
        );
    }
}



// Export the Class
export default Information;