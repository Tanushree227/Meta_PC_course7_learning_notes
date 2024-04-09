import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

function Navbar()
{
    return(
        <header className={classes.header}>
            <div className={classes.logo}>EchoHub</div>
            <nav>
                <ul>
                    <li><Link to="/" exact>Home</Link></li>
                    <li><Link to="/week1">Week1</Link></li>
                    <li><Link to="/week2">Week2</Link></li>
                    <li><Link to="/week3">Week2</Link></li>
                    <li><Link to="/week4">Week2</Link></li>
                    <li><Link to="/week5">Week2</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;
