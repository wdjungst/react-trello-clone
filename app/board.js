import React from 'react';
import ReactDOM from 'react-dom';
import BoardPage from './containers/BoardPage';
let id = window.location.pathname.split("/boards/")[1];

ReactDOM.render(<BoardPage id={id}/>, document.getElementById('content'));
