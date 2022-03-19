import { NavLink } from "react-router-dom";
import './style.scss';

export default function Header(){
    return <header className="header">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/experience" activeClassName="active">Experience</NavLink>
    </header>
}