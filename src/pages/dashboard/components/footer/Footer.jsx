export const Footer = () => {
   return (
      <>
         <footer className="footer pt-3  ">
            <div className="container-fluid">
               <div className="row align-items-center justify-content-lg-between">
                  <div className="col-lg-6 mb-lg-0 mb-4">
                     <div className="copyright text-center text-sm text-muted text-lg-start">
                        © <script>
                           document.write(new Date().getFullYear())
                        </script>
                        made with <i className="fa fa-heart"></i> by
                        <a href="#" className="font-weight-bold"> Cacti Life</a>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   )
}