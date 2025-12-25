//router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.tsx";
import Home from "@/pages/Home";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
{
    index:true,
    element:<Home/>,
},
// {
//     index:true,
//     element:<
// }
        ]
    }

])

export default router

