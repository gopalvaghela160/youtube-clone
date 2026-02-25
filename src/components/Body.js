import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Head from "./Head";

const Body = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Head />

      {/* Sidebar + Body */}
      <div className="flex flex-1 ">
        <SideBar />

        {/* Main Content */}
        <main className="flex-1 overflow-x-auto bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Body;
