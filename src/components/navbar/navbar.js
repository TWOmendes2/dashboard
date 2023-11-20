import './navbar.css';
import avatar from '../../assets/avatar.png';


const Navbar = ({sidebarOpen, openSidebar})=>{
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={()=> openSidebar()}>
                <i className="ph ph-list" aria-hidden="true"></i>
            </div>
            <div className="navbar__left">
                <a href="#">Produtos</a>
                <a href="#">Usuários</a>
                <a href="#" className="active_link">Admin</a>
            </div>
            
            <div className="navbar__rigth">
                <a href="#">
                    <i className="ph ph-magnifying-glass"></i>
                </a>
                <a href="#">
                    <i className="ph ph-clock-countdown"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )
}
 export default Navbar;

 