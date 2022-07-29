import Home from "../pages/Home";
import {Login} from "../pages/Login";
import GeneralLayout from "../pages/GeneralLayout";
const publicRoutes = [
    {path : '/', component: GeneralLayout},
    {path: '/login', component:Login}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}