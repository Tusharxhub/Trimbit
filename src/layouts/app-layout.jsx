import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <div>
            <main className="min-h-screen container">
                <Header />
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Development by <a href="https://github.com/Tusharxhub" target="_blank" rel="noopener noreferrer">Tusharxhub</a>
            </div>
        </div>
    );
};

export default AppLayout;