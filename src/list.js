import {BiEdit}  from 'react-icons/bi'
import {MdDeleteForever} from 'react-icons/md'
export const List = ({list,removeItem,editItem})=>{
    return (
        <div className="list-container">
        {list.map(item=>{
            const {id,title} = item
            return <article className='art'>
            <p>{title}</p>
            <div className="edits">
            <span className='edit' onClick={()=>{
                editItem(id)
            }} ><BiEdit/></span><span className='delete' onClick={()=>{
                removeItem(id)
            }}><MdDeleteForever/></span>
            </div>
            </article>
        })}
        

        </div>
    )
    
    
}