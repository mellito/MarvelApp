import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [user, setUser] = useState(null);
  if (localStorage.getItem("user")) {
    setUser(JSON.parse(localStorage.getItem("user")));
  }
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
    <nav>
      <ul className="nav-bar">
        {elements.map((element) => {
          return (
            <li key={element.name}>
              <p>
                bienvenido {user.name} {user.lastname}
              </p>
              <Link to={element.link} onClick={element.action.closeSession}>
                {element.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
