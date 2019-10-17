import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Square from './js/Square';

ReactDOM.render(<Square />, document.getElementById('root'));

serviceWorker.unregister();
