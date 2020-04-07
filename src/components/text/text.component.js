// Import "React" and "Component"
import React, {Component} from 'react';

// Import the Stylesheet
import './text.component.scss';



class Text extends Component
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



export default Text;