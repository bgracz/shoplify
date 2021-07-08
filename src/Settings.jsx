import React, {useState, useEffect} from 'react';
import './Settings.css';
import Input from './Input';
import Task from './Item';
import TextField from '@material-ui/core/TextField';

function Settings() {
    const [list, addtoList] = useState(localStorage == null ? [] : JSON.parse(localStorage.getItem("LIST")));
    const [input, setInput] = useState("");
    useEffect(() => {
      window.localStorage.setItem("LIST", JSON.stringify(list))
    })

  function change(event){
    const inputField = event.target.value;
    setInput(inputField);
    }

 function addToList() {
        if (input === ""){
            return false;
        } else {
            addtoList((prevList) => {
                return [
                    ...prevList, 
                    {name: input}
                ]
            })            
            setInput("");           
        }
    }

    function newTask(item, index){
        return <Task 
        id={index}
        name={item.name}
        delete={remove}
        />
      }
    
      function remove(id) {
        addtoList(prevItems => {
          return prevItems.filter((todo, index) => {
            return index !== id;
          });
        })
      }

    function debug(){
      console.log(list);
    }

    return (
    <div className="settings">
        <h1 className="settingsHead">Settings</h1>
        <div className="listFrame">{list.length === 0 ? <p className="empty">it's so empty here :(</p> : <nav><ul>{list.map(newTask)}</ul></nav>}</div>
        <div className="inputField"><Input className='input' changeInput={change} addToListClick={addToList} inputText={input} debug={debug}/></div>
    </div> )
}

export default Settings;
