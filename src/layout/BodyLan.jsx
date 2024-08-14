import { Outlet } from "react-router-dom";
import '../App.css';
import Footer from "../layout/FooterLan";
import Header from "../layout/HeaderLan";

export default function BodyLan() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  );
}
