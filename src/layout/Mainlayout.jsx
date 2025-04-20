import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

function Mainlayout() {
  return (
    <>
      <Sidebar />
      <main>
        <Outlet />
      </main>
      ;
    </>
  );
}

export default Mainlayout;
