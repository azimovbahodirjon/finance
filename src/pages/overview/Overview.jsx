import { useLogout } from "../../hooks/useLogout";
import "./Overview.scss";

function Overview() {
  const { signout, isPending } = useLogout();
  return (
    <div className="overview">
      <button className="logout-btn" onClick={() => signout()}>
        {isPending ? "Loading..." : "Logout"}
      </button>
    </div>
  );
}

export default Overview;
