import { NavLink } from "react-router";

function MainNav() {
  const menus_left = [
    { id: 1, text: "LOGO", path: "/" },
    { id: 2, text: "Home", path: "/" },
    { id: 3, text: "About", path: "/about" },
  ];
  const menus_right = [
    { id: 1, text: "Register", path: "/register" },
    { id: 2, text: "Login", path: "/login" },
  ];
  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <div className="flex gap-2">
          {menus_left.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.text}
            </NavLink>
          ))}
      </div>
      <div className="flex gap-2">
          {menus_right.map((item) => (
            <NavLink key={item.id} to={item.path}>
              {item.text}
            </NavLink>
          ))}
      </div>
    </nav>
  );
}
export default MainNav;
