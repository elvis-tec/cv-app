import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logoh.png';

export const Navbar = () => {
  return (
    <header className="mb-auto">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <img
                    src={ logo } 
                    alt="Logo" 
                    width="30" 
                    height="30" 
                    className="d-inline-block align-text-top" 
                />
                <span className="ms-1">Elvis Salazar</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` } to="/education">
                        Education
                    </NavLink>

                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` } to="/work">
                        Work History
                    </NavLink>
                    
                    <NavLink className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active' : '' }` } to="/techs">
                        Technical Skills
                    </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
};