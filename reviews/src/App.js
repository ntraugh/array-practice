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

    } else {
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

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* this conditional is checking our state of alert with the property of show. If it's true we show the alert */}
        {alert.show && <Alert alert={alert} unShowAlert={showAlert}/>}
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
          <List items={list}/>
          <button className="clear-btn">
            Clear Items
          </button>
        </div>}
    </section>
   
  );
}

export default App;
