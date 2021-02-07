export const List = ({list,removeItem,editItem})=>{
    return (
        <div className="list-container">
        {list.map(item=>{
            const {id,title} = item
            return <article>
            <p>{title}</p>
            <button onClick={()=>{
                editItem(id)
            }} >edit</button><button onClick={()=>{
                removeItem(id)
            }}>delete</button>
            </article>
        })}
        

        </div>
    )
    
    
}