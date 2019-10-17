import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Board from './js/Board';

ReactDOM.render(<Board />, document.getElementById('root'));

serviceWorker.unregister();
