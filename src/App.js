import { AppHeader } from "./Shared/header/header";
//import { AppFooter } from "./Shared/footer/footer";
import { Outlet, Route } from "react-router-dom";

 export function App() {

  return (
    <>
      <AppHeader />
      <Outlet />
      
    </>
  );
}
