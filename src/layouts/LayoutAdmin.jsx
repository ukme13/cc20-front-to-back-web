import { Outlet } from "react-router";

function LayoutAdmin() {
  return (
    <div>
      NavbarAdmin
      <Outlet />
    </div>
  );
}
export default LayoutAdmin;
