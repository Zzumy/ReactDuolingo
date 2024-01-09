import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header className="App-header">
                <h1>Tanuljunk Angolul!</h1>
            </header>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">
                            Valaszto
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/rendez">
                            Rendez
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/gepel">
                            Gepel
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
