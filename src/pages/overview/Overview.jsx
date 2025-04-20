import React from "react";
import useLogout from "../../hooks/useLogout";
import "./Overview.scss";

function Overview() {
  const { signout, isPending } = useLogout();

  return (
    <div className="overview">
      <div className="overview__content">
        <h1>Welcome Back!</h1>
        <p>Click below to logout.</p>
        <button
          className="logout-btn"
          onClick={() => signout()}
          disabled={isPending}
        >
          {isPending ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}

export default Overview;
