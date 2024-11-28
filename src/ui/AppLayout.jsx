import {Outlet, useNavigation} from "react-router-dom";

import Header from "./Header.jsx";
import CartOverview from "../features/cart/CartOverview.jsx";
import Spinner from "./Spinner.jsx";


export default function AppLayout() {

    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return <div className={"layout"}>
        {isLoading && <Spinner />}

        <Header/>
        <main>
            <Outlet/>
        </main>
        <CartOverview/>
    </div>
}

