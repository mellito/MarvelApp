import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CHARACTERS_ROUTE } from "../components/Routes";
const LobbyRedirect = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      return navigate(CHARACTERS_ROUTE);
    }
  }, [navigate]);

  return children;
};

export default LobbyRedirect;
