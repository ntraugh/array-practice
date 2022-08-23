import { useState } from "react";
import List from "./List";
import Alert from "./Alert"

function App() {

  const [name, setName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hey")
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* this conditional is checking our state of alert with the property of show. If it's true we show the alert */}
        {alert.show && <Alert />}
        <h3>Grocery Helper</h3>
        <div className="form-control">
          <input 
            type="text" 
            className="grocery" 
            placeholder="Items"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <button type="submit" className="submit-btn">
            {/* using our state value to change the button since we will allow the user to edit their items */}
            {isEditing ? "Edit" : "Submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">
          Clear Items
        </button>
      </div>
    </section>
   
  );
}

export default App;
