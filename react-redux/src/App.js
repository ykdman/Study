import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/Counter.js";
import Header from "./components/Header.js";
import UserProfile from "./components/UserProfile.js";
import Auth from "./components/Auth.js";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
