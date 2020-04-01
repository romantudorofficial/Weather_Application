// Import React
import React from 'react';

// Import React DOM
import ReactDOM from 'react-dom';

// Import the App Component
import App from './App';

// Other Imports
import * as serviceWorker from './serviceWorker';

// Import the Stylesheet
import './index.css';



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();