import React, { useState } from 'react';

function ContactForm(props) {
    const [state, setState] = useState(
        [
            {name: '',
            phone_number:'',
            location: ''
        },
        ]);
    
      function handleOnChange(event) {
        setState({
          ...state,
          [event.target.name]: event.target.value,
        });
      }
      function handleSubmit() {
        let userId = 10000 + Math.random() * 10000000;
        let user = { ...state, id: userId };
        props.handleAddContacts(user);
      }
      
       
    return(
        <div className="info">
            <form>
                <div>       
          <label>Name</label>

          <input type="text" name="name" value={state.name} placeholder="Enter Your Name" onChange={handleOnChange}  />
        </div><br></br>

        <div>
          <label>Phone Number</label>

          <input type="number" name="phone_number" value={state.phone_number} placeholder="Enter Your Phone Number" onChange={handleOnChange} />
        </div><br></br>

        <div>
          <label>Location</label>
          <input type="text" name="location" value={state.location} placeholder="Enter Your Location" onChange={handleOnChange} />
        </div><br></br>

        <div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </form>
     </div>
             
        
    );
}
export default ContactForm;