import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './db.json';

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={data.postsData}
      dialogsData={data.dialogsData}
      messagesData={data.messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
