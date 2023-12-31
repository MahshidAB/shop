import { NavLink } from "react-router-dom";
import headerCss from "./HederCss.module.css";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                id={headerCss.linkStyle}
                className="nav-link active"
                to={"/"}
              >
                صفحه اصلی
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle text-white mx-1"
                href="#"
                data-bs-toggle="dropdown"
                id={headerCss.linkStyle}
              >
                محصولات
              </NavLink>
              <ul className="dropdown-menu" id={headerCss.dir}>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/productsCellphones"
                    id={headerCss.dropdown}
                    style={(navDate) => ({backgroundColor: navDate.isActive ? "rgb(178, 175, 239)" : "",
                     color: navDate.isActive ? "white" : ""})}
                  >
                    موبایل
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/productsFurnitures"
                    id={headerCss.dropdown}
                    style={(navDate) => ({backgroundColor: navDate.isActive ? "rgb(178, 175, 239)" : "",
                    color: navDate.isActive ? "white" : ""})}
                  >
                    لوازم خانگی
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/productSuperMarkets"
                    id={headerCss.dropdown}
                    style={(navDate) => ({backgroundColor: navDate.isActive ? "rgb(178, 175, 239)" : "",
                    color: navDate.isActive ? "white" : ""})}
                  >
                    محصولات سوپرمارکتی
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/products"
                    id={headerCss.dropdown}
                    style={(navDate) => ({backgroundColor: navDate.isActive ? "rgb(178, 175, 239)" : "",
                     color: navDate.isActive ? "white" : ""})}
                  >
                    همه محصولات
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                id={headerCss.linkStyle}
                className="nav-link"
                to={"/login"}
              >
                پنل اعضا
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                id={headerCss.linkStyle}
                className="nav-link"
                to={"/users/createusers"}
              >
               ثبت نام
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
