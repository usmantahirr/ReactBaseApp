import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'antd/dist/antd.css';

import Notification from './shared/notifications';
import ErrorBoundary from './shared/error/ErrorBountry';
import Routes from './routes';
import './App.css';

function App() {
  return (
    <Notification>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ErrorBoundary>
    </Notification>
  );
}

export default App;
