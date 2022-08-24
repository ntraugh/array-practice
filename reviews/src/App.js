import { useState } from "react";
import List from "./List";
import Alert from "./Alert"

function App() {

  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "Alert", type: "success"})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      // call the showAlert function that runs the setAlert function
      showAlert(true, "danger", "Enter Some Input")
    } else if (name && isEditing){
        // if there is something in the input value AND isEditing state is true
        // we call our setList state and set it to map over our new list and return where the id matches our editID
        // if it matches we return the whole item {...item} with our new title that is name(input)
      setList(list.map((item) => {
        if(item.id === editID) {
          return {...item, title: name}
        }
        // if the ID doesn't match we still want to return the item becuase they did not edit this item
        return item
        
      }))
      // need to set our name to an empty value OUTSIDE of the setList function and setIsEditing to false so the button changes back to submit
      setName("")
      setIsEditing(false)
    } else {
      // after we've successfully entered data we show the showAlert(show, type, msg) function
      showAlert(true, "success", "Item added!")
      // show the alert and create the new item
      const newItem = { id: new Date().getTime().toString(), title: name }
      // we have to setList to our original list and our new item so that when we add a new item all of our older items are still in our list
      setList([...list, newItem])
      // after we set our list we reset our name to an empty string to clear out the input field.
      setName("")
    }
  }

  // function that takes in show, type, and msg which we give default values, then runs the setAlert function to set the values for the parameters
  const showAlert = (show=false, type="", msg="") => {
      setAlert({show, type, msg})
  }

  const clearList = () => {
    showAlert(true, "danger", "Items Deleted!")
    // after we run our function we need to clear the list
    setList([])
  }

  // function to remove the item, need to pass this to the List component through props
  const removeItem = (id) => {
    // first we show our alert that the item was deleted
    showAlert(true, "danger", "Item Deleted")
    // then we set our list by filtering through the items and displaying all the items where the id doesn't match the one clicked
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    // using the find array method to return the one item where it's id matches the one we pass into the function
    const item = list.find((item) => item.id === id);
    // now we set our editing state to true since the user has clicked the edit button
    setIsEditing(true)
    // we set our edit ID to the id that was passed in
    setEditID(id)
    // and we set our name(input) to whatever the new item title is
    setName(item.title)
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* this conditional is checking our state of alert with the property of show. If it's true we show the alert */}
        {/* We pass in our alert state, the showAlert function, and our list state to our Alert component through props */}
        {alert.show && <Alert alert={alert} unShowAlert={showAlert} list={list}/>}
        <h3>Grocery Helper</h3>
        <div className="form-control">
          <input 
            type="text" 
            className="grocery" 
            placeholder="Insert grocery items here"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {/* using our state value to change the button since we will allow the user to edit their items */}
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      {/* only show the div if the list length is greater than 0 */}
      {list.length > 0 &&
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}>
            Clear Items
          </button>
        </div>}
    </section>
   
  );
}

export default App;
