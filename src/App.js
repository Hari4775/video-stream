import './App.css';
import React from 'react';
import Head from './Component/Head';
import Body from './Component/Body';
import { Provider } from 'react-redux';
import store from './Utils/Store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './Component/MainComponent';
import Watchpage from './Component/Watchpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
    path:"/",
    element:<MainComponent/>,
    },
    {
      path:"watch",
      element:<Watchpage/>
    }


  ]
}])
function App() {
  return (
    <>
    <Provider store={store}>
    <div className="App xl">
    <Head/>
    <FontAwesomeIcon className='p-5' icon="fa-solid fa-house" />
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
    </>
  );
}

export default App;
