import { NavLink } from "react-router-dom";
import scss from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav >
      <ul className={scss.wraper}>
        <li >
          <NavLink to="/" className={scss.item}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className={scss.item}>Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className={scss.item}>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
