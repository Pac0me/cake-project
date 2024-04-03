import React from 'react'
import { useState } from 'react'

function App() {
  //state (données)
  const [contacts, setContacts] = useState([
    {id: 1, name: "Bob"},
    {id: 2, name: "Jean"}
  ])

  const [newContact, setNewContact] = useState("")

  // action comportements
  const handleDelete = (id) => {
    //1- copie du state
    const contactsCopy = [...contacts];

    //2 manip sur le state
    const contactsCopyUpdate = contactsCopy.filter((contact) => contact.id !== id)

    //3 modif final grace au setter
    setContacts(contactsCopyUpdate);
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const contactsCopy = [...contacts]

    const id = new Date().getTime()
    const name = newContact

    setContacts({id:id, name:name})
  }

  const handleChange = (event) => {
    setNewContact(event.target.value)
  }

  // affichage 
  return (
    <>
    <form action="submit" onSubmit={handleSubmit}>
    <input 
      value={newContact}
      type="text" 
      onChange={handleChange}
    />
   <button>Add</button>
    </form>
    <div>
      <ul>{contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} 
          <button onClick={() => handleDelete(contact.id)}>X</button>
        </li>
      ))}

      </ul>
    </div>
    </>
  )
}

export default App