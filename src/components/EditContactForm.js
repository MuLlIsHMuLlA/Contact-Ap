import React, { useState } from 'react';

function EditContactForm(props) {

  const [state, setState] = useState({
    username: props.user.name,
    email: props.user.phone_number,
    password: props.user.location,

  });

  function handleOnChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    let user = { ...state, id: props.user.id };
    props.updateUser(props.user.id, user);
    props.hideModal();
  }
  return (

    <div className="info">
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={state.name} placeholder="Enter Your Name" onChange={handleOnChange} />
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
            Update
          </button>
        </div>
      </form>
    </div>

  )
}
export default EditContactForm;