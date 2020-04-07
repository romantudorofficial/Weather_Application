// Import "React" and "Component"
import React, {Component} from 'react';

// Import the Stylesheet
import './information.component.scss';



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



export default Information;