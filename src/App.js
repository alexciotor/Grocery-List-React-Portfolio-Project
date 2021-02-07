import React, {useState} from 'react'
import './App.scss';
import {List} from './list'

function App() {
const [name,setName ] = useState('')
const [list,setList] = useState([])
const [isEditing, setIsEditing] = useState(false)
const [editId, setEditId] = useState(null)
console.log(list);
  const handlesubmit=(e)=>{
 e.preventDefault()
if(!name){
  console.log('hello World');
}
else if(name && isEditing){
  setList(list.map(item=>{
    if(item.id ===editId){
      return {...item, title: name}
    }
    return item
  }))
  setName('')
  setEditId(null)
  setIsEditing(false)
}
else{
  const newItem = {id:new Date().getTime().toString(),
  title:name
  }
  setList([...list,newItem])
  setName('')
}
  }
  const clear = ()=>{
    setList([])
  }
  const removeItem =(id)=>{
    setList(list.filter(item=>item.id !==id))
  }
  const editItem  = (id)=>{
    const specificItem= list.find(item=>item.id ===id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }
  return (
    <div  className='main-container' >
 <h4>grocery list</h4>
 <form onSubmit={handlesubmit} >
 <input type="text" value = {name} onChange={(e)=>{
   setName(e.target.value)
 }}  />
 <button >submit</button>
 </form>
 <List removeItem={removeItem} editItem = {editItem}list = {list}/>
 <button
 onClick={()=>{
   clear()
 }} 
 >clear</button>
    </div>
  );
}

export default App;
