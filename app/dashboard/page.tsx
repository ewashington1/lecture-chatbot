import React from "react";
import { main } from "../styles";
import Sidebar from "../components/Sidebar";
import ChatSection from "../components/ChatSection";

const Dashboard = () => {
  return (
    <main className="flex text-slate-700 flex-grow py-4 h-full overflow-clip">
      <Sidebar />
      <ChatSection />
    </main>
  );
};

export default Dashboard;
