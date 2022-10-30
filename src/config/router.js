import { useRoutes } from "react-router-dom";
import Home from "page/Home";
import RentCar from "page/rent-resources/Rent";

const routerSource = (props) => [
  { index: true, path: "/", element: <Home {...props} title="Home" /> },
  { index: true, path: "/start-rent-car", element: <RentCar {...props} title="Rent Car" /> },
  { index: true, path: "/*", element: <>ERROR</> },
];

const AppRoutes = (props) => {
  const routers = routerSource(props);
  let routes = useRoutes(routers);
  return routes;
};

export default AppRoutes;
/*




React router dom
"React router dengan tambahan fitur"

Index Route - A child route with no path that renders in the parent's outlet at the parent's URL.

route "/" (parent index true)
const componentHome = <Home>

route "/calculate" (parent index true)
const componentCalcuate = <Calculate>

route "/calculate/scientific" (child index false)
const componentCalcuateSci = <CalculateSci>

const person = {
  name: "abi",
  occupancy: "pontianak"
}

const buyer = {person}

console.log(buyer) // ??

// const buyer = {person}
{person: {name : "abi", occupancy: "pontianak" } }  // benar

// const buyer = person
{name : "abi", occupancy: "pontianak" } // benar

// const buyer = {...person}
{name : "abi", occupancy: "pontianak" } // benar

*/
