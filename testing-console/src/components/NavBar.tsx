import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/table/users"> Table Users</NavLink>
        </li>
        <li>
          <NavLink to="/table/resources"> Table Resources</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
