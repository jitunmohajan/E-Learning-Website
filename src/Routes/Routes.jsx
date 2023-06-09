import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Login from "../Pages/Login/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Blogs from "../Pages/Blogs/Blogs";
import PageError from "../Pages/PageError/PageError";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://assignment-10-server-dun.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('https://assignment-10-server-dun.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> {
                    return fetch(`https://assignment-10-server-dun.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute> ,
                loader: ({params})=>{
                    return fetch(`https://assignment-10-server-dun.vercel.app/courses/${params.id}`)
                }
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    },
        {
            path: '*',
            element: <PageError></PageError>
        }
]);
