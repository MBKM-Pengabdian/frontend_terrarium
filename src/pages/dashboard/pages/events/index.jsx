import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import TableEvent from "./components/table/table";

export const EventDashboard = () => {
  return (
    <>
      <Sidebar />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">
          <div className="card">
            <div className="card-body">
              <TableEvent />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};
