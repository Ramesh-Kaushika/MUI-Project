import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Home from "../../pages/Home/Home.jsx";
import Ramesh from "../../pages/Ramesh/Ramesh.jsx";

const routes = [
    {
        name : "Dashboard",
        key : 'dashboard',
        path : '/dashboard',
        component : <Dashboard/>


    },
    {
        name : "Home",
        key : 'home',
        path : '/home',
        component : <Home/>

    },
    {
        name : "Ramesh",
        key : 'ramesh',
        path : '/ramesh',
        component : <Ramesh/>

    }
]

export default routes;