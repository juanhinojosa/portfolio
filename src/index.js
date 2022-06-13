import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes,Router  } from 'react-router-dom';

/*alert import*/
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const root = ReactDOM.createRoot(document.getElementById('root'));
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const AppRender = () => (
  <Provider template={AlertTemplate} {...options}>
    <App />
  </Provider>
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Nav />}> -> ejemplo para implementar menu navegador */}
            <Route path="/">
              <Route index element={<AppRender/>} />    
              <Route path='/portfolio' element={<AppRender/>} />   
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
