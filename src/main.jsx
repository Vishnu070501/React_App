import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Root, { loader as rootLoader } from "./routes/root";
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.css"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root></Root>,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,

//     // children: [
//     //   {
//     //     path: "contacts/:contactId",   //if you wanna display this component inside the root component make it a child of this component
//     //     element: <Contact />,
//     //   },
//     // ],
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   },
  
// ]);//here the below way we created routs using the element 
// const routes = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element= {<App/>}>
//       <Route path='contacts/:contactId' element= {<Contact/>}></Route>
//   </Route>
// )
// ,)
//now if we wanna create routes the other way
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"contacts/",
        element: <Contact/>,
        children:[
          {
            path:":contactId",
            element: <Contact/>
          }
        ]
      }
    ]
  }
],)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <RouterProvider router={router} /> */}

  {/* this botton div implements css */ }
  {/* <div className="bg-emerald-500 w-52 h-52"><h1>hiii</h1></div>  */}

  {/* if you wanna learn about the basics of react please use this component And remove all the styles from index.css */}
    {/* <App />  */}
    <RouterProvider router={routes}/>
    
  </React.StrictMode>
  
  ,
)
