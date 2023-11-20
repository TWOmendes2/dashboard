import './sidebar.css';
import logo from '../../assets/logo.jpeg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Nómada</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="ph ph-list"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
        <i class="ph ph-house"></i>
          <a href="#">Home</a>
        </div>
        <h2>ADMIN</h2>
        <div className="sidebar__link">
          <i class="ph ph-bag-simple"></i>
          <a href="#">Área administrativa</a>
        </div>
        <div class="sidebar__link">
          <i class="ph ph-storefront"></i>
          <a href="#">Lojas</a>
        </div>
        <div className="sidebar__link">
          <i class="ph ph-bowl-food"></i>
          <a href="#">Produtos</a>
        </div>
        <div className="sidebar__link">
          <i class="ph ph-chart-bar-horizontal"></i>
          <a href="#">Categorias</a>
        </div>
        <div className="sidebar__link">
          <i class="ph ph-fork-knife"></i>
          <a href="#">Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
        <i class="ph ph-smiley"></i>
          <a href="#">Administrador</a>
        </div>
        <div className="sidebar__link">
        <i class="ph ph-users-three"></i>
          <a href="#">Usuarios</a>
        </div>
        <div className="sidebar__link">
        <i class="ph ph-credit-card"></i>
          <a href="#">Pagamentos e custos</a>
        </div>
        <div className="sidebar__link">
        <i class="ph ph-file"></i>
          <a href="#">Política de privacidade</a>
        </div>
        <div className="sidebar__logout">
        <i class="ph ph-sign-out"></i>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


