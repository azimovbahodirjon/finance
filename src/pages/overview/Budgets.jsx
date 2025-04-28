import { NavLink } from "react-router-dom";
import ApexChart from "./ApexChart";
import { useCollectionsData } from "../../hooks/useCollectionsData";

function Budgets({ showTotalPrice = true }) {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.balance)) {
    return null;
  }

  // Calculate the total price from data.balance
  const totalPrice = data.balance.reduce(
    (sum, item) => sum + (item.amount || 0),
    0
  );

  return (
    <div className="card">
      <span className="nav-title">
        <h3>Budgets</h3>
        <NavLink className="NavLink" to="/budgets">
          See Details
          <img src="./icon-caret-right.svg" alt="" />
        </NavLink>
      </span>
      <div className="apexchart">
        <ApexChart totalPrice={totalPrice} showTotalPrice={showTotalPrice} />
      </div>
    </div>
  );
}

export default Budgets;
