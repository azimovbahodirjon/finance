import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const { logout, isPending } = useLogout();

  const handleLogout = () => {
    if (user?.uid) {
      logout(user.uid);
    }
  };

  return (
    <div className="sidebar-container">
      <div className="logo-wrap">
        <img
          className="sidebar-logo"
          src="./images/logo-large.svg"
          alt="Finance Logo"
        />
      </div>
      <div className="item-wrap">
        <NavLink
          className={({ isActive }) => `items ${isActive ? "active" : ""}`}
          to="/"
          end
        >
          <img src="./images/icon-nav-overview.svg" alt="Overview Icon" />
          <p>Overview</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `items ${isActive ? "active" : ""}`}
          to="/transactions"
        >
          <img
            src="./images/icon-nav-transactions.svg"
            alt="Transactions Icon"
          />
          <p>Transactions</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `items ${isActive ? "active" : ""}`}
          to="/budgets"
        >
          <img src="./images/icon-nav-budgets.svg" alt="Budgets Icon" />
          <p>Budgets</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `items ${isActive ? "active" : ""}`}
          to="/pots"
        >
          <img src="./images/icon-nav-pots.svg" alt="Pots Icon" />
          <p>Pots</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => `items ${isActive ? "active" : ""}`}
          to="/recurringBills"
        >
          <img
            src="./images/icon-nav-recurring-bills.svg"
            alt="Recurring Bills Icon"
          />
          <p>Recurring bills</p>
        </NavLink>
      </div>
      <div className="side-logout">
        {user && (
          <NavLink
            className="items logout-btn"
            to="/login"
            onClick={handleLogout}
          >
            <img src="./images/icon-minimize-menu.svg" alt="Logout Icon" />
            <p>{isPending ? "Logging out..." : "Logout"}</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
