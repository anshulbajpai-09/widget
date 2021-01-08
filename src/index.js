import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductDetails from './ProductDetails';

const WidgetDivs = document.querySelectorAll('#root-element');

WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={props => <App domElement={Div} {...props} />} />
          <Route path="/product/:id" render={props => <ProductDetails domElement={Div} {...props} />} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>,
    Div
  );
})

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" render={props => <App {...props} />} />
//         <Route path="/product/:id" render={props => <ProductDetails {...props} />} />
//       </Switch>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
