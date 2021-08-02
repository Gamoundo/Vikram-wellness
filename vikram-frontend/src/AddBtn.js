import React, { useState } from 'react';


function AddVacation(props) {

    const [show, setShow] = useState("");

    const handleClose = () =>  setShow("");
    const handleShow = () =>  setShow( <div>
        
        
        
        <div className="form" show={show}>
            <div>
                <button onClick={handleClose}> X</button>
                <h1>Set a new destination </h1>
                <form onSubmit={handleSubmit}>
                <div>
                <input type="text" name="name" />
                <label htmlFor="name">Name</label> 
                </div>
                <div>
                <input type="textarea" name="info" />
                <label htmlFor="info">Info</label> 
                </div>
                <div>
                <input type="text" name="date" />
                <label htmlFor="date">Date</label> 
                </div>
                <div>
                <input type="file" name="image" accept="image/png, image/jpeg" />
                <label htmlFor="image">Image</label> 
                </div>
                
                <input type="submit" value="Post" onClick={handleClose} />
                
                 
            </form>
            </div>
        </div>
        
        
    </div>);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)

     let newPost = {
            name: e.target.name.value,
            image: e.target.image.value,
            date: e.target.date.value,
            info: e.target.info.value
        }

        props.add(newPost)

    }

    return (
        
        
    <div>
        <button variant="primary" onClick={handleShow}>
    A New Retreat
  </button>
        {show}
    </div>

        
    )


}

export default AddVacation;