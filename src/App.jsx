import AppRoutes from "./AppRoutes";
import { fetchAdverts } from "./Api/api";
import { useEffect } from "react";

const App = () => {
  useEffect(()=>fetchAdverts)
  return <AppRoutes />;
};

export default App;
