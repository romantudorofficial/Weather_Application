// Import "React" and "Component"
import React, {Component} from 'react';

// Import the Stylesheet
import './temperature.component.scss';



class Temperature extends Component
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



export default Temperature;