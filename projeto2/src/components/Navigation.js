import { NavLink } from 'react-router-dom';

function Navigation() {

    return (

        <nav className="main-nav">
            <ul>
                <li><NavLink to='/action'>Action</NavLink></li>
                <li><NavLink to='/romance'>Romance</NavLink></li>
                <li><NavLink to='/suspense'>Suspense</NavLink></li>
                <li><NavLink to='/comedy'>Comedy</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;