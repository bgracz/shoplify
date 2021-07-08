import React from 'react';
import './Input.css';
import AddBoxIcon from '@material-ui/icons/AddBox';

function Input(props) {
    return <div>
    <div className="inputDiv">
        <input className="input" name="input" onChange={props.changeInput} value={props.inputText}></input>
    </div>
        <AddBoxIcon onClick={props.addToListClick} style={{fontSize: '280%', color: 'white'}} className="addButton"/>
    </div>
}

export default Input;
