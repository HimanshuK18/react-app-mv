import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props: { children: any; }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkUserToken = () => {
    const userToken = sessionStorage.getItem("userToken");
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      return navigate('/login');
    }
    setIsLoggedIn(true);
  }

  useEffect(() => {
    checkUserToken();
  }, [checkUserToken, isLoggedIn]);

  return (
    <React.Fragment>
      {
        isLoggedIn ? props.children : null
      }
    </React.Fragment>
  );
}
export default ProtectedRoute;