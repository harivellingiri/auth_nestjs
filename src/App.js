
import Home from './screens/home/home';
import List from './screens/list/list';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import YetToDevelop from './component/yettodevelop';
import SignUp from './screens/signup/signup';
import Signin from './screens/signin/signin';
import React, { useState } from 'react';
import { SigninContext } from './constants/signinContext';

// const router = createBrowserRouter([
//   {
//     path: "/signin",
//     element: <Signin />,
//   }, {
//     path: "/list",
//     element: <List />,
//   }, {
//     path: "/home",
//     element: <Home />,
//   }, {
//     path: "/yet/:id",
//     element: <YetToDevelop />,
//   }, {
//     path: "/signup",
//     element: <SignUp />,
//   },
// ]);
function App() {
  const [apptoken, setapptoken] = useState("")
  const [refresh, setrefresh] = useState("")
  // const apptkn = useMemo(apptoken, [apptoken])
  // <RouterProvider router={router} />
  return (
    <SigninContext.Provider
      value={{ setapptoken, apptoken, setrefresh, refresh }}
    >
      <BrowserRouter>
        <Routes >
          {localStorage.getItem('token') === null ? (
            <>

              <Route path='/signin' element={<Signin />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='*' exact={true} element={<Signin />} />
            </>
          ) : (
            <>
              <Route path='/list' element={<List />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/yet/:id' element={<YetToDevelop />}></Route>
              <Route path='*' exact={true} element={<Home />} />
            </>)}
        </Routes>
      </BrowserRouter>

    </SigninContext.Provider>
  );
}

export default App;
