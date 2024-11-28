import {getMenu} from "../../services/apiRestaurant.js";
import {useLoaderData} from "react-router-dom";
import MenuItem from "./MenuItem.jsx";

// this is the data that we want on page load
// this function should return the data that the component needs
// the convention is to create the loader function in the page that requires that data
// But still we need to export actual API call logic in a service, so it's a bit more reusable
export async function loader() {
    const menu = await getMenu();
    return menu;
}

function Menu() {

    const menu = useLoaderData();

    return <ul>
        {menu.map(pizza => <MenuItem key={pizza.id} pizza={pizza} />)}
    </ul>;
}

export default Menu;
