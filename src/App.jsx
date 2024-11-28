import {createBrowserRouter, RouterProvider} from "react-router-dom";

import AppLayout from "./ui/AppLayout.jsx";
import Home from "./ui/Home.jsx";
import Menu, {loader as menuLoader} from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder, {action as createOrderSubmitAction} from "./features/order/CreateOrder.jsx";
import Order, {loader as orderLoader} from "./features/order/Order.jsx";
import Error from "./ui/Error.jsx";

const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error />,
    children: [
        {
            index: true,
            element: <Home/>
        },
        {
            path: '/menu',
            element: <Menu/>,
            loader: menuLoader,
            errorElement: <Error />,
        },
        {
            path: '/cart',
            element: <Cart/>
        },
        {
            path: '/order',
            children: [
                {
                    path: '/order/new',
                    element: <CreateOrder/>,
                    action: createOrderSubmitAction
                },
                {
                    path: '/order/:orderId',
                    element: <Order/>,
                    loader: orderLoader,
                    errorElement: <Error />
                }
            ]
        }
    ]
}])

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
