import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const { user } = useSelector((state) => state.user);
  const { logout } = useLogout();

  const handleLogout = () => {
    if (user?.uid) {
      logout(user.uid);
    }
  };

  return (
    <div className="Sidebar-container">
      <div className="logo-wrap">
        <img className="sidebar-logo" src="./images/logo-large.svg" alt="" />
      </div>
      <div className="item-wrap">
        <NavLink className="items" to="/">
          <img src="./images/icon-nav-overview.svg" alt="" />
          <p>Overview</p>
        </NavLink>
        <NavLink className="items" to="/transactions">
          <img src="./images/icon-nav-transactions.svg" alt="" />
          <p>Transactions</p>
        </NavLink>
        <NavLink className="items" to="/budgets">
          <img src="./images/icon-nav-budgets.svg" alt="" />
          <p>Budgets</p>
        </NavLink>
        <NavLink className="items" to="/pots">
          <img src="./images/icon-nav-pots.svg" alt="" />
          <p>Pots</p>
        </NavLink>
        <NavLink className="items" to="/recurringBills">
          <img src="./images/icon-nav-recurring-bills.svg" alt="" />
          <p>Recurring bills</p>
        </NavLink>
      </div>
      <div className="side-logout">
        {user && (
          <NavLink className="items" to="/login">
            <img
              onClick={handleLogout}
              src="./images/icon-minimize-menu.svg"
              alt=""
            />
            <p>Minimize Menu</p>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
