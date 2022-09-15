import { useNavigation } from "@react-navigation/native";
import { signOut } from "~store/auth/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SignOut = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(signOut());
    navigation.navigate("SignIn");
  }, []);

  return null;
};

export default SignOut;
