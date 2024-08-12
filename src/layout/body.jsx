import { Outlet } from "react-router-dom";
import '../App.css';
import Footer from "../layout/footer";
import Header from "../layout/header";

export default function Body() {
  return (
    <>
        <Header/>
        <div style={
            {
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                width: "100%"
            }
        }>
        <Outlet />
        </div>
        <Footer/>
    </>
  );
}
