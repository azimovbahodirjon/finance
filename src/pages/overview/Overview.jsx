import { useLogout } from "../../hooks/useLogout";
import "./Overview.scss";
import Current from "./Current";
import Pots from "./Pots";
import Transactions from "./Transactions";
import Budgets from "./Budgets";
import RecurringBills from "./RecurringBills";

function Overview() {
  const { logout, isPending } = useLogout();

  return (
    <section className="overview-container">
      <div className="overview-header">
        <h2 className="overview-title">Overview</h2>
        <button className="logout-btn" onClick={() => logout()}>
          {isPending ? "Logging out..." : "Logout"}
        </button>
      </div>
      <div>
        <Current />
        <div className="overview-cards-grid">
          <div className="over-two-card">
            <Pots />
            <Transactions />
          </div>
          <div className="over-two-card">
            <Budgets />
            <RecurringBills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
