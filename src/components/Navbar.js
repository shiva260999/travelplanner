import React from 'react';
import "./Navbar.css";
import { MenuItems } from './Menuitems';
import { Link } from 'react-router-dom';
import SignUpform from './SignUpform';


class Navbar extends React.Component {
    state  = { clicked : false};
    handleClick = ()=>{
        this.setState({ clicked: !this.state.clicked})
    }
    render() {
        return (
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>
                    Run Away
                </h1>
        
                <div className="menu-icons" onClick={this.handleClick} >
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                    return(
                    <li>
                    <Link className={item.cName} to={item.url}>
                    <i className={item.icon}>
                     </i>{item.title}
                    </Link>
                    </li>
                    );
                    })}
                    <button> Log In/Sign Up</button>

                </ul>
        
            </nav>
          )

    }
}
export default Navbar
