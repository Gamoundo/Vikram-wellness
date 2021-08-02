// import React, { useState } from 'react';
// import Modal from "react-bootstrap/Modal"

// function AddVacation(props) {

//     const [show, setShow] = useState(false);
//     const handleClose = () =>  setShow(false);
//     const handleShow = () =>  setShow(true);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(e.target)

//      let newPost = {
//             name: e.target.name.value,
//             image: e.target.image.value,
//             date: e.target.date.value,
//             info: e.target.info.value
//         }

//         props.add(newPost)

//     }

//     return (
        
//         <div>
//             <button variant="primary" onClick={handleShow}>
//         A New Retreat
//       </button>
            
            
//             <Modal className="form" show={show}>
//             <Modal.Header closeButton onClick={handleClose}>
//                 <Modal.Title id="Joy">
//                     Set a new destination
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                     <input type="text" name="name" />
//                     <label htmlFor="name">Name</label> 
//                     </div>
//                     <div>
//                     <input type="textarea" name="info" />
//                     <label htmlFor="info">Info</label> 
//                     </div>
//                     <div>
//                     <input type="text" name="date" />
//                     <label htmlFor="date">Date</label> 
//                     </div>
//                     <div>
//                     <input type="file" name="image" accept="image/png, image/jpeg" />
//                     <label htmlFor="image">Image</label> 
//                     </div>
                    
//                     <input type="submit" value="Post" onClick={handleClose} />
                    
                     
//                 </form>
//             </Modal.Body>
//         </Modal>
//         </div>
        



        
//     )


// }

// export default AddVacation;