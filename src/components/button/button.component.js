import React, {Component} from 'react';

import './button.style.scss';



class Button extends Component
{
    render ()
    {
        return (
            <button onClick = {this.props.onButtonClick}>
                {this.props.city}
            </button>
        );
    }
}



export default Button;