import { Navbar } from "../../components/navbar/Navbar"
import { Footer } from "../../components/footer/Footer"
import { Sidebar } from "../../components/sidebar/Sidebar"
import TableProduct from "./components/table/table"

export const ProductDashboard = () => {
   return (
      <>
         <Sidebar />
         <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <Navbar />
            <div className="container-fluid py-4">
               <div className="card">
                  <div className="card-body">
                     <TableProduct />
                  </div>
               </div>
            </div>
            <Footer />
         </main>
      </>
   )
}