import { validateLocalResfreshToken } from "~store/auth/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SessionHandler = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLocalResfreshToken());
  }, [dispatch]);

  return children;
};

export default SessionHandler;
