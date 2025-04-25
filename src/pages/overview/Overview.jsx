import { useLogout } from "../../hooks/useLogout";
import "./Overview.scss";

function Overview() {
  const { signout, isPending } = useLogout();

  return (
    <div className="overview">
      <button className="logout-btn" onClick={() => signout()}>
        {isPending ? <span className="loader"></span> : "Logout"}
      </button>
    </div>
  );
}

export default Overview;
