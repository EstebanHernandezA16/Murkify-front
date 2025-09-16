import { createBrowserRouter, Routes } from "react-router-dom";
import {Home} from '../Home';
import {Login} from '../Login';

const userlogged = true;

export const MyRouter = createBrowserRouter([
    {path:'/', element: userlogged? <Home /> : <Login/>}
])