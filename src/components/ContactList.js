import React from 'react';
import Contacts from './Contacts';

function ContactList(props) {
    return(
        <div>
             {props.allUsers.map((user) => (
        <Contacts user={user}
         delete={props.delete} 
         updateUser={props.updateUser}
        
        />
        
      ))}
        </div>
    )
}
export default ContactList;