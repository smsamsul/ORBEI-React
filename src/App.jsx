import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar"
import Rootlayout from "./Components/Rootlayout";
import Home from "./Pages/Home";
import Shope from "./Pages/Shope";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home/>}></Route>
      <Route path="/Shope"element={<Shope/>}></Route>
      

    </Route>
  )
);
function App() {
 
  return (
    <>

    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
