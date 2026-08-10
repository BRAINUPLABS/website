import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Announcementbar from "./Home/Announcementbar";
import WhatsappFloat from "./Home/WhatsappFloat";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Announcementbar />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
                <WhatsappFloat />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;