import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"

// passing our items prop from our app.js to our list.js so we can map over the items
const List = ({items, removeItem, editItem}) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        // destructure the id and title after we get the item so we don't have to do item.id and item.title in our {}
        const {id, title} = item
        return <article key={id} className="grocery-item">
          <p className='title'>{title}</p>
          <div className='btn-container'>
            <button type='button' className='edit-btn' onClick={() => editItem(id)}>
              <FaEdit size={20}/>
            </button>
            {/* we can use the id in our removeItem function because we've destructured it already in this map function */}
            <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
              <FaTrash size={18}/>
            </button>
          </div>
        </article>
      })}
    </div>
  )
}

export default List