import { lazy } from "react"
import { Outlet } from "react-router-dom";

const Header = lazy(() => import("../Components/Header"));
const Footer = lazy(() => import("../Components/Footer"))


function WebsiteMain() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default WebsiteMain
