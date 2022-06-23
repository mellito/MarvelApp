import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [user] = useState(JSON.parse(localStorage.getItem("user")));
  const elements = [
    {
      name: `cerrar sesión`,
      link: "/",
      action: {
        closeSession: () => {
          localStorage.removeItem("user");
        },
      },
    },
  ];
  return (
    <nav className="navbar flex">
      <p className="nav-user font-bold">
        bienvenido {user.name} {user.lastname}
      </p>

      <ul className="nav-bar">
        {elements.map((element) => (
          <li key={element.name}>
            <Link to={element.link} onClick={element.action.closeSession}>
              {element.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
