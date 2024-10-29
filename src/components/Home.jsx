import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Home() {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar />
            {
                navigation.state === "loading" ? "Loading..." : <Outlet />
            }
            <Footer />
        </div>
    );
}
