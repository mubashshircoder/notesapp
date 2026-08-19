import { NavLink } from "react-router-dom"



function Navbar() { 
    return <>
   <div className="flex flex-row gap-4 text-white p-4">
     <NavLink to="/">
        home
    </NavLink>
    <NavLink to="/pastes">
        pastes
    </NavLink>
   </div>
    </>
}
export default Navbar