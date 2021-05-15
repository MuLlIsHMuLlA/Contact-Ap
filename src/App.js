import { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';


function App() {
  const [users, setState] = useState([]);
  function handleAddContacts(user) {
    setState([...users, user]);
  }

  function deleteUser(id) {
    let newUsers = users.filter((user) => user.id !== id);
    setState(newUsers);
  }
  function updateUser(id, updateUserInfo) {
    let newUsers = users.map((user) => {
      if (user.id === id) {
        return updateUserInfo;
      }
      return user;
    });
    setState(newUsers)

  }
  return (
    <div className="container">
      <div className="row">
        <h2 style={{marginLeft: '50px' }} >Contact Us</h2>
        <div className="col-md-6">
          <ContactForm handleAddContacts={handleAddContacts} />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ContactList allUsers={users}
                delete={deleteUser}
                updateUser={updateUser}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default App;