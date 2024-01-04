/* eslint-disable react/prop-types */
import { FormEvent } from "../form/form"

export const ModalEvent = ({ title }) => {
   return (
      <>
         <div className="modal modal-xl fade" id="modal-product" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
               <div className="modal-content">
                  <div className="modal-header">
                     <h1 className="modal-title fs-5" id="title-modal">{title}</h1>
                  </div>
                  <div className="modal-body">
                     <FormEvent/>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}