import { AppHeader } from "./Shared/header/header";
//import { AppFooter } from "./Shared/footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Route } from "react-router-dom";

export function App() {

  return (
    <>
      <AppHeader />
      <Outlet />

    </>
  );
}
