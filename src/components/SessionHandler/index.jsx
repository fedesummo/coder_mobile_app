import { validateLocalResfreshToken } from "~store/auth/actions";
import { getPlaces } from "~store/places/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SessionHandler = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(validateLocalResfreshToken());
    dispatch(getPlaces());
  }, [dispatch]);

  return children;
};

export default SessionHandler;
