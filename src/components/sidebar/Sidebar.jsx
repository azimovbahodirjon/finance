import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.scss";

function Sidebar() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className={`Sidebar-container ${showNavbar ? "toggle-bar" : ""}`}>
      <div>
        <div className="logo-wrap">
          <img
            className={showNavbar ? "sidebar-logo-small" : "sidebar-logo"}
            src={
              showNavbar ? "./images/logo-small.svg" : "./images/logo-large.svg"
            }
            alt=""
          />
        </div>
        <div className="item-wrap">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `items${isActive ? " active" : ""}`}
          >
            {({ isActive }) => (
              <>
                <img src="./images/icon-nav-overview.svg" alt="Overview" />
                {!showNavbar && <p>Overview</p>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/transactions"
            className={({ isActive }) => `items${isActive ? " active" : ""}`}
          >
            {({ isActive }) => (
              <>
                <img
                  src="./images/icon-nav-transactions.svg"
                  alt="Transactions"
                />
                {!showNavbar && <p>Transactions</p>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/budgets"
            className={({ isActive }) => `items${isActive ? " active" : ""}`}
          >
            {({ isActive }) => (
              <>
                <img src="./images/icon-nav-budgets.svg" alt="Budgets" />
                {!showNavbar && <p>Budgets</p>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/pots"
            className={({ isActive }) => `items${isActive ? " active" : ""}`}
          >
            {({ isActive }) => (
              <>
                <img src="./images/icon-nav-pots.svg" alt="Pots" />
                {!showNavbar && <p>Pots</p>}
              </>
            )}
          </NavLink>

          <NavLink
            to="/recurringBills"
            className={({ isActive }) => `items${isActive ? " active" : ""}`}
          >
            {({ isActive }) => (
              <>
                <img
                  src="./images/icon-nav-recurring-bills.svg"
                  alt="Recurring bills"
                />
                {!showNavbar && <p>Recurring bills</p>}
              </>
            )}
          </NavLink>
        </div>
      </div>
      <div
        onClick={() => setShowNavbar(!showNavbar)}
        className="side-logout items"
      >
        <img src="./images/icon-minimize-menu.svg" alt="" />
        {!showNavbar && <p>Minimize Menu</p>}
      </div>
    </div>
  );
}

export default Sidebar;
