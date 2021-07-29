import React from 'react'

function DeleteBtn(props) {

let newArr;
    const handleDelete = () => {
        console.log(props.arr)
        console.log(props.obj)
        console.log(props.change)
        newArr = props.arr.filter(obj => obj !== props.obj)
        console.log(newArr)
        props.change(newArr)
        
    }
    
    return (
        <div>
            <button onClick={handleDelete}> Delete</button>
        </div>
    )
}

export default DeleteBtn;