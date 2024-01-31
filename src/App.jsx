
import Profile from "./components/Profile"
import ComposedComponent from "./components/ComposedComponent"
import ListRender from "./components/ListRender"
import Gallery from "./components/Gallery"
import UseEffectComponent from "./components/UseEffectComponent"
import StatusBar from "./components/onlineOffline"
import SaveButton from "./components/SaveProgress"
import { Link, Outlet } from "react-router-dom"
import "./index.css"
// import Contact from "./routes/contact"
// import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';

// import ListWithUnstableIndex from "./components/ListWithUnstableIndex"
export default function App() {

  return (
    <>
        <h1>hi <Link to={"/contacts/1"}>contacts page</Link></h1>
        {/* <Profile></Profile> */}
        {/* shows props in action */}
        {/* <ComposedComponent sampleArg = {"100"} sampleArg2 = {100}>
          <div><h2>hiii this is a child inside the prop</h2></div>
          <h3>hiii this is a second child</h3>
          </ComposedComponent> */}
        {/* shows composition in action */}
        {/* <ListRender profession = {'chemist'}></ListRender> */}
        {/* shows how to render list in react */}
        {/* <Gallery></Gallery>  */}
        {/* shows use state in action */}
        {/* <ListWithUnstableIndex></ListWithUnstableIndex> */}
        {/* <UseEffectComponent/> */}
        {/* tells whether online or offline and the save button only works when online both of them have commeon code so we put them into a custome made hook called  */}
        {/* <StatusBar></StatusBar>
        <SaveButton></SaveButton> */}
        <div className="bg-sexy-blue-100 ">
          hiiii
          <button className="btn-blue">hover</button>
        </div>
        <div className="bg-blue-500 "></div>
        <Outlet></Outlet>
    </>
  )
}

 
