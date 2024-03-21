import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16"> <Nav /> </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;