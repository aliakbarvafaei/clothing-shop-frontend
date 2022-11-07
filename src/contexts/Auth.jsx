import { createContext, useContext, useState } from "react";
import { getUser } from "../services/api";

const AuthContext = createContext(undefined);

const setLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error({ e });
  }
};

const getLocalStorage = (key, initialValue) => {
  const value = localStorage.getItem(key);
  if (value) {
    getUser()
      .then((response) => {
        return { loggedIn: response.data.email, token: JSON.parse(value) };
      })
      .catch((err) => {
        return { loggedIn: false, token: "" };
      });
  } else return initialValue;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    getLocalStorage("token_user", { loggedIn: false, token: "" })
  );
  // setUser(getLocalStorage('token_user', { loggedIn: false, token: ''}))
  // console.log("3",user)
  // useEffect(() => {
  //   setLocalStorage('token_user', user.token)
  // }, [user])
  setInterval(() => {
    console.log(user);
  }, 5000);

  const toggleAuth = (email = false, token = "") => {
    setUser((prev) => ({
      ...prev,
      loggedIn: email,
      token: token,
    }));
    setLocalStorage("token_user", token);
  };

  const value = { toggleAuth: toggleAuth, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined)
    throw new Error("useAuth must be within AuthProvider!");

  return context;
};

export { AuthProvider, useAuth };
