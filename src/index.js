import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Signin from './screens/signin/signin';
import reportWebVitals from './reportWebVitals';
import Home from './screens/home/home';
import List from './screens/list/list';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import YetToDevelop from './component/yettodevelop';
import SignUp from './screens/signup/signup';


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  }, {
    path: "/list",
    element: <List />,
  }, {
    path: "/home",
    element: <Home />,
  }, {
    path: "/yet/:id",
    element: <YetToDevelop />,
  }, {
    path: "/signup",
    element: <SignUp />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
