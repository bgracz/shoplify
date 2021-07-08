import React from "react";
import './Item.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Task(props){
    return <div className="item">
    <p>{props.name}<DeleteForeverIcon onClick={() => {props.delete(props.id)}}/></p>
    </div>
};

export default Task;